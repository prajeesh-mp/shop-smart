import React, { useEffect, useState } from "react";
import { FiArrowLeftCircle, FiPlus, FiTrash2 } from "react-icons/fi";
import { Stores, addData, addMultipleData } from "../services/db.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface Item {
  id: number;
  value: string;
  fieldRef: any;
}

function PurchaseList(): JSX.Element {
  const navigate = useNavigate();

  const [inputFields, setInputFields] = useState<Item[]>([
    { id: 1, value: "", fieldRef: null },
  ]);

  const [idCounter, setIdCounter] = useState(1);
  const [isSaved, setIsSaved] = useState(false);

  const handleAddInput = () => {
    const newInputField: Item = { id: idCounter, value: "", fieldRef: null };
    setInputFields((inputFields) => [...inputFields, newInputField]);
    setIdCounter((idCounter) => idCounter + 1); // Increment the counter
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleInputChange = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedInputs = inputFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputFields(updatedInputs);
  };

  const handleRemoveInput = (id: number) => {
    const remainingInputs = inputFields.filter((field) => field.id !== id);
    setInputFields(remainingInputs);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await addData(Stores.PurchaseLists, {
        name: "Groceries",
        total_amount: 0,
        created_at: Date.now(),
      });

      let dd = inputFields.map((item) => ({
        name: item.value,
        list_id: res,
        is_purchased: false,
        created_at: Date.now(),
      }));

      // console.log(dd);

      await addMultipleData(Stores.ListItems, dd, () => {
        // console.log("Data added !!!");
        // alert("Saved");
        setIsSaved(true);
        toast.success("Shopping list created !!!");
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        // console.log(err.message);
      } else {
        // console.log("Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (inputFields.length > 0 && inputFields[inputFields.length - 1].fieldRef)
      inputFields[inputFields.length - 1].fieldRef?.focus();
  }, [idCounter]);

  return (
    <div className="purchase">
      <div className="p-3">
        <span className="avatar"></span>
        <span onClick={() => navigate(-1)}>
          <FiArrowLeftCircle size={25} />
        </span>

        <h2 className="mt-4">
          Create a <br /> shopping list now !
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="items mt-3">
          <div className="items-top d-flex flex-row justify-content-between align-items-center my-3">
            <h2 className="title">Write down</h2>
            <span className="desc">{inputFields.length} Items</span>
          </div>

          {inputFields &&
            inputFields.map((input) => (
              <div
                className="item d-flex flex-row justify-content-between align-items-center mb-3"
                key={input.id}
              >
                <input
                  name={input.id.toString()}
                  id={input.id.toString()}
                  type="text"
                  className="w-100"
                  placeholder="Write here . ."
                  onChange={(event) => handleInputChange(input.id, event)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleAddInput();
                    }
                  }}
                  ref={(e) => (input.fieldRef = e)}
                />
                <div
                  className="trash d-flex flex-row justify-content-center align-items-center"
                  onClick={() => handleRemoveInput(input.id)}
                >
                  <FiTrash2 color="#CD5226" />
                </div>
              </div>
            ))}

          <div
            className="item d-flex flex-row justify-content-center mt-4 mb-5"
            onClick={() => handleAddInput()}
          >
            <FiPlus color="#000" size={20} />
          </div>
          <div className="fixed-bottom  btn-container ">
            <button
              // label="Save to my list"
              // isProcessing={false}
              className={`save-btn ${isSaved && "btn-saved"}`}
              type="submit"
              // onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PurchaseList;
