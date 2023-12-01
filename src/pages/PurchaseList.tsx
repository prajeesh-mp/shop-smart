import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Task {
  text: string;
  completed: boolean;
}

const PurchaseList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(event.target.value);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputTask.trim() !== "") {
      setTasks([...tasks, { text: inputTask, completed: false }]);
      setInputTask("");
    }
  };

  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed,
    };
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      {/* <h3>Todo List</h3> */}
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <input
                type="checkbox"
                className="mr-3"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              {task.text}
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Add a new task..."
        value={inputTask}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
      {/* 
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={inputTask}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
        <select className="form-control mr-2">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div> */}
    </div>
  );
};

export default PurchaseList;
