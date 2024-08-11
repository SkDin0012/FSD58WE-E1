import React from 'react';
import '../css/style.css';

const Filter = ({ setFilter }) => {
  return (
    <div className="mb-4 d-flex justify-content-between align-items-center">
      <h5>My Todos</h5>
      <div className="d-flex align-items-center">
        <label className="mr-2">Status Filter:</label>
        <select onChange={(e) => setFilter(e.target.value)} className="form-control w-auto">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
