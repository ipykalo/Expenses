import "./Expesnse.css";
import React, { useState } from "react";
import Expense from "../../../interfaces/Expense";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesProps from "./ExpensesProps";
import Card from "../../UI/Card";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";

const Expenses = (props: ExpensesProps) => {
    const DEFAULT_YEAR: string = '2021';
    const [selectedYear, setYear] = useState(DEFAULT_YEAR);
    const onSelectFilter = (year: string): void => setYear(year);

    const expenseItems: JSX.Element[] = props.items.map((expense: Expense) => (
        <ExpenseItem key={expense.id} item={expense} />
    ));

    const filteredExpenses = expenseItems.filter((item: JSX.Element) => {
        const date = new Date(item.props.item.date).getFullYear();
        return date === +selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} onSelectFilter={onSelectFilter} />
                {filteredExpenses}
            </Card>
        </div>
    );
}

export default Expenses;