import React, { useState } from "react";
import "./ExpenseForm.css";
export function ExpenseForm({ onSubmitNewExpense, onCancelNewExpense }) {
  const [changedTitle, setChangedTitle] = useState("");
  const [changedAmount, setChangedAmount] = useState("");
  const [changedDate, setChangedDate] = useState("");
  const titleChangeHandler = (event) => {
    setChangedTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setChangedAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setChangedDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: changedTitle,
      amount: changedAmount,
      date: new Date(changedDate),
    };
    setChangedAmount("");
    setChangedTitle("");
    setChangedDate("");
    onSubmitNewExpense(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Type</label>
          <input
            type="text"
            value={changedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={changedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={changedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div class="new-expense__actions">
        <button type="button" onClick={onCancelNewExpense}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
