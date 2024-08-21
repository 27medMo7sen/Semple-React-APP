import React, { useState } from "react";

import "./ExpensesFilter.css";

export const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const yearChanged = (event) => {
    console.log(event.target.value);
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={yearChanged}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
