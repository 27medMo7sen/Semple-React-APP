import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";
export const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  }
  return expenses.map((filteredExpense) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={filteredExpense.id}
        title={filteredExpense.title}
        amount={filteredExpense.amount}
        date={filteredExpense.date}
      />
    </ul>
  ));
};
