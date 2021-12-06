import "./CreateExpense.css"
import React, { useState } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import CreateExpenseProps from "./CreateExpenseProps";
import Expense from "../../../interfaces/Expense";

const CreateExpense = (props: CreateExpenseProps) => {
    const [isVisibleForm, setVisibleForm] = useState(false);

    const onAddExpense = (data: Expense) => {
        props.onAddExpense(data);
        setVisibleForm(false);
    }

    const onHideForm = () => {
        setVisibleForm(false);
    }

    const onShowForm = () => {
        setVisibleForm(true);
    }

    return (
        <div className="new-expense">
            {isVisibleForm && <ExpenseForm onAddExpense={onAddExpense} onCancel={onHideForm} />}
            {!isVisibleForm && <button onClick={onShowForm}>Add Expense</button>}
        </div>
    );
}

export default CreateExpense;