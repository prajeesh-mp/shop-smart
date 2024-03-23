let db: IDBDatabase;
let version = 1;
let dbName = "ShopSmart";

export enum Stores {
  PurchaseLists = "purchase_lists",
  ListItems = "list_items",
}

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // open the connection
    var request = indexedDB.open(dbName);

    request.onupgradeneeded = () => {
      db = request.result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains(Stores.PurchaseLists)) {
        // console.log("Creating purchase lists store");
        let store = db.createObjectStore(Stores.PurchaseLists, {
          keyPath: "id",
          autoIncrement: true,
        });

        store.createIndex("purchase_list_index", "id");
      }

      if (!db.objectStoreNames.contains(Stores.ListItems)) {
        // console.log("Creating list items store");
        let store = db.createObjectStore(Stores.ListItems, {
          keyPath: "id",
          autoIncrement: true,
        });

        store.createIndex("list_items_index", "list_id");
      }
      // no need to resolve here
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      // console.log("request.onsuccess - initDB", version);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};

export const addData = <T>(
  storeName: string,
  data: T
): Promise<T | string | IDBValidKey | null> => {
  return new Promise((resolve) => {
    var connection = indexedDB.open(dbName, version);

    connection.onsuccess = () => {
      db = connection.result;

      const txn = db.transaction(storeName, "readwrite");
      const store = txn.objectStore(storeName);

      var operation = store.add(data);

      operation.onerror = (event) => {
        let error = operation.error?.message;
        if (error) resolve(error);
        else resolve("Unknown error");
      };

      operation.onsuccess = () => {
        resolve(operation.result);
      };
    };

    connection.onerror = () => {
      const error = connection.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve("Unknown error");
      }
    };
  });
};

export const addMultipleData = <T>(
  storeName: string,
  data: T[],
  callback: () => void
): Promise<T | string | IDBValidKey | null> => {
  return new Promise((resolve) => {
    var connection = indexedDB.open(dbName, version);

    connection.onsuccess = () => {
      db = connection.result;

      const txn = db.transaction(storeName, "readwrite");
      //   const store = txn.objectStore(storeName);

      data.forEach((data) => {
        txn.objectStore(storeName).add(data);
      });

      txn.oncomplete = () => {
        callback();
      };
    };

    connection.onerror = () => {
      const error = connection.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve("Unknown error");
      }
    };
  });
};

export const getStoreData = <T>(storeName: Stores): Promise<T[]> => {
  return new Promise((resolve) => {
    var request = indexedDB.open(dbName);

    request.onsuccess = () => {
      // console.log("request.onsuccess - getAllData");
      db = request.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const res = store.getAll();
      res.onsuccess = () => {
        resolve(res.result);
      };
    };
  });
};

export const queryStoreData = <T>(
  storeName: Stores,
  id: number
): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    var request = indexedDB.open(dbName);
    request.onsuccess = () => {
      // console.log("request.onsuccess - getQueriedData");
      db = request.result;
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const index = store.index("list_items_index");

      var keyRange = IDBKeyRange.only(id);
      var data: T[] = [];

      index.openCursor(keyRange).onsuccess = function (event: any) {
        var cursor = event.target?.result;

        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        } else {
          resolve(data);
        }
      };
    };
    request.onerror = () => {
      reject("Something went wrong");
    };
  });
};

export const updateStoreData = (
  storeName: Stores,
  id: number,
  status: boolean
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    var request = indexedDB.open(dbName);
    request.onsuccess = () => {
      // console.log("request.onsuccess - updateData");
      db = request.result;
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      var getRequest = store.get(id);
      getRequest.onsuccess = function (event) {
        var data = getRequest.result;

        if (data) {
          // Modify the properties of the retrieved object
          data.is_purchased = status;

          // Put the updated object back into the object store
          var putRequest = store.put(data);

          putRequest.onsuccess = function (event) {
            resolve(true);
          };

          putRequest.onerror = function (event) {
            reject("Error updating object");
          };
        } else {
          reject("Object not found");
        }
      };

      request.onerror = () => {
        reject("Something went wrong");
      };
    };
  });
};

export const deleteData = (
  storeName: string,
  key: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    // again open the connection
    var request = indexedDB.open(dbName, version);

    request.onsuccess = () => {
      // console.log("request.onsuccess - deleteData", key);
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.delete(key);

      // add listeners that will resolve the Promise
      res.onsuccess = () => {
        resolve(true);
      };
      res.onerror = () => {
        resolve(false);
      };
    };
  });
};
