import React from "react";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div>
      <span>{expense.title}</span>
      <span>${expense.amount.toFixed(2)}</span>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
