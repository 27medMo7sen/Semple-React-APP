import React, { useState } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
export function NewExpense({ addToExpenses }) {
  const [form, setForm] = useState(false);
  const onNewExpense = (newExpenseData) => {
    addToExpenses(newExpenseData);
    setForm(false);
  };
  const formActionHandler = () => {
    setForm(false);
  };
  if (form) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSubmitNewExpense={onNewExpense}
          onCancelNewExpense={formActionHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={() => setForm(true)}>Add New Expense</button>
    </div>
  );
}
