import React, { useState } from "react";
import { Container, Form, ListGroup, Button } from "react-bootstrap";

const PurchaseList: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-4">
      <h1>Create new Purchase List</h1>
      <Form>
        <Form.Group controlId="taskInput" className="mb-3">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={handleTaskChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            {task}
            <Button variant="danger" onClick={() => handleDeleteTask(index)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PurchaseList;
