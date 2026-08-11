import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <div className="list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
