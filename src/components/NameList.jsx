import React from 'react';

const NameList = ({ names }) => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="name-list-container border rounded p-4 bg-light">
      <h2 className="text-center mb-4">Name List</h2>
      <ul >
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default NameList;
