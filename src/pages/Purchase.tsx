import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import {
  Stores,
  queryStoreData,
  updateStoreData,
} from "../services/db.service";
import { useEffect, useState } from "react";
import { Item } from "../interfaces/Item";

function Purchase(): JSX.Element | null {
  const navigate = useNavigate();
  const params = useParams();
  const [items, setItems] = useState<Item[] | []>([]);
  const [itemsCollected, setItemsCollected] = useState(0);

  const fetchData = async () => {
    const data = await queryStoreData<Item>(
      Stores.ListItems,
      Number(params.id)
    );
    setItems(data);
    setItemsCollected(data.filter((item) => item.is_purchased).length);
  };

  const handleCheck = async (id: number, status: boolean) => {
    try {
      const update = await updateStoreData(Stores.ListItems, id, status);
      if (update) {
        fetchData();
      }
    } catch (error: any) {
      // console.log("Error occured", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!params.id) return null;

  return (
    <div>
      <div className="purchase">
        <div className="p-3 mb-2">
          <span className="avatar"></span>
          <div className="d-flex flex-row align-items-center">
            <span onClick={() => navigate(-1)} className="back-button">
              <FiArrowLeft size={25} color="#0f2e79" />
            </span>
            <span className="ms-2">Dashboard</span>
          </div>

          <h2 className="mt-4">
            Complete <br /> your Shopping in peace
          </h2>
        </div>
        <div className="items p-4 bg-white">
          <div className="items-top d-flex flex-row justify-content-between align-items-center my-3">
            <h2 className="title">Groceries </h2>
            <span className="desc">
              {itemsCollected}/{items.length} Items
              {itemsCollected === items.length && (
                <FaCircleCheck color="#42a32c" className="ms-2" />
              )}
            </span>
          </div>

          {items?.map((item) => (
            <div
              key={item.id}
              className="item d-flex flex-row justify-content-between align-items-center mb-3"
              onClick={() => handleCheck(item.id, !item.is_purchased)}
            >
              <span className="item-desc">{item.name}</span>
              <div
                className={`${
                  item.is_purchased ? "checked" : "check"
                } d-flex flex-row justify-content-center align-items-center`}
                onClick={() => handleCheck(item.id, !item.is_purchased)}
              >
                {item.is_purchased && <FiCheck color="#8ab780" />}
              </div>
            </div>
          ))}

          {/* <div className="d-flex flex-row justify-content-between align-items-center seperator mt-4">
            <div className="item d-flex flex-row justify-content-between align-items-center mt-4">
              <input
                name="total"
                id="total"
                type="number"
                min={1}
                className="w-100"
                placeholder="Total Amount"
                //   onChange={(event) => handleInputChange(input.id, event)}
                //   onKeyDown={(event) => {
                //     if (event.key === "Enter") {
                //       event.preventDefault();
                //       handleAddInput();
                //     }
                //   }}
                //   ref={(e) => (input.fieldRef = e)}
              />
            </div>

            <button className="btn btn-md btn-primary mt-4">Finish</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Purchase;
