import "./Expesnse.css";
import React, { useState } from "react";
import Expense from "../../../interfaces/Expense";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesProps from "./ExpensesProps";
import Card from "../../UI/Card";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";

const Expenses = (props: ExpensesProps) => {
    const expenseItems: JSX.Element[] = props.items.map((expense: Expense) => (
        <ExpenseItem key={expense.id} item={expense} />
    ));

    const [filteredExpenses, setFilteredExpenses] = useState(expenseItems);
    const onSelectFilter = (filter: string): void => {
        const filtered = expenseItems.filter((item: JSX.Element) => {
            const date = new Date(item.props.item.date).getFullYear();
            return date === +filter;
        });
        setFilteredExpenses(filtered);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSelectFilter={onSelectFilter} />
                {filteredExpenses}
            </Card>
        </div>
    );
}

export default Expenses;