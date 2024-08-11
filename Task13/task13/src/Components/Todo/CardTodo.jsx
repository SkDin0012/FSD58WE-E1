import React, { useState } from "react";
import "../css/style.css";

const TodoCard = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(todo.status);

  const handleEdit = () => setIsEditing(!isEditing);
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    updateTodo(todo.id, { status: e.target.value });
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">Name: {todo.taskName}</h5>
        <p className="card-text">Description: {todo.description}</p>
        <div className="card-text">
          <label>Status:</label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="form-control w-auto d-inline-block ml-2"
          >
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <br />
        <button onClick={handleEdit} className="btn btn-success mr-2">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger mr-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
