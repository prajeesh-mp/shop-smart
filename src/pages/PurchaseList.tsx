import React, { RefObject, useEffect, useRef, useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import AppButton from "../components/Form/Button";

interface Item {
  id: number;
  value: string;
}

function PurchaseList(): JSX.Element {
  const [inputFields, setInputFields] = useState<Item[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleAddInput = (callback?: () => void) => {
    const newInputField = { id: idCounter, value: "" };
    setInputFields([...inputFields, newInputField]);
    setIdCounter(idCounter + 1); // Increment the counter
    callback && callback();
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

  const inputRefs = useRef<Array<RefObject<HTMLInputElement>>>([]);

  // Create a new input ref for each input field
  useEffect(() => {
    if (idCounter === 0) handleAddInput();

    inputRefs.current = Array(inputFields.length)
      .fill(null)
      .map((_, index) => inputRefs.current[index] || React.createRef());
  }, [inputFields]);

  return (
    <div className="purchase">
      <div className="p-3">
        <span className="avatar"></span>
        <span>Hi, John</span>

        <h2 className="mt-4">
          Create a <br /> shopping list now!
        </h2>
        <p>
          Helps you buy only what you need, <br />
          stay within budget, and avoid forgetting items
        </p>
      </div>

      <div className="items mt-3 p-4">
        <div className="items-top d-flex flex-row justify-content-between align-items-center my-3">
          <h2 className="title">Write down</h2>
          <span className="desc">{inputFields.length} Items</span>
        </div>

        {inputFields.map((input, index) => (
          <div
            className="item d-flex flex-row justify-content-between align-items-center mb-3"
            key={input.id}
          >
            <input
              type="text"
              className="w-100"
              placeholder="Write here . ."
              onChange={(event) => handleInputChange(input.id, event)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleAddInput();
                  setTimeout(() => {
                    if (inputRefs.current[index + 1]) {
                      inputRefs.current[index + 1].current?.focus();
                    }
                  }, 100);
                }
              }}
              ref={inputRefs.current[index]}
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
          className="item d-flex flex-row justify-content-center mt-4"
          onClick={() => handleAddInput()}
        >
          <FiPlus color="#000" size={20} />
        </div>

        <AppButton
          label="Save to my list"
          isProcessing={false}
          className="mt-3"
        />
      </div>
    </div>
  );
}

export default PurchaseList;
