import React, { useState } from "react";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
export function Expenses({ expenses }) {
  const [filteredYear, setSelectedYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={selectedYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
