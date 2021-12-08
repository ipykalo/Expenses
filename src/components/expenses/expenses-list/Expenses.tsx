import "./Expesnse.css";
import React, { useState } from "react";
import Expense from "../../../interfaces/Expense";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesProps from "./ExpensesProps";
import Card from "../../UI/card/Card";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import ExpensesChart from "../expenses-chart/ExpensesChart";

const Expenses = (props: ExpensesProps) => {
    const DEFAULT_YEAR: string = '2021';
    const [selectedYear, setYear] = useState(DEFAULT_YEAR);
    const onSelectFilter = (year: string): void => setYear(year);

    let filteredExpenses = props.items;
    if (selectedYear !== 'all') {
        filteredExpenses = props.items.filter((item: Expense) => {
            return item.date.getFullYear() === +selectedYear;
        });
    }

    const expenseItems: JSX.Element[] = filteredExpenses.map((expense: Expense) => (
        <ExpenseItem key={expense.id} item={expense} />
    ));

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onSelectFilter={onSelectFilter} />
            <ExpensesChart expenses={filteredExpenses} />
            {expenseItems.length ? expenseItems : <p>No items found.</p>}
        </Card>
    );
}

export default Expenses;