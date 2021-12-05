import "./CreateExpense.css"
import React from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import CreateExpenseProps from "./CreateExpenseProps";

const CreateExpense = (props: CreateExpenseProps) => {
    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={props.onAddExpense} />
        </div>
    );
}

export default CreateExpense;