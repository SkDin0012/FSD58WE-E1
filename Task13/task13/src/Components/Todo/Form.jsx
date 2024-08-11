import React, { useState } from 'react';
import '../css/style.css';


const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      addTodo({ taskName, description });
      setTaskName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex justify-content-center">
      <input
        type="text"
        placeholder="Todo Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className=" mr-2 hh"
        required
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className=" mr-2 hh"
      />
      <button type="submit" className="btn btn-success">Add Todo</button>
    </form>
  );
};

export default TodoForm;
