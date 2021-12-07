import "./ExpenseForm.css"
import React from "react";
import { FormEvent } from "react";
import FromState from "../../../interfaces/FormState";
import { useFormState } from "../../../hooks/FormState";
import ExpenseFormProps from "./ExpenseFormProps";
import Expense from "../../../interfaces/Expense";
import ModalError from "../../UI/modal-error/ModalError";

const ExpenseForm = (props: ExpenseFormProps) => {
    const title: FromState = useFormState('');
    const amount: FromState = useFormState('');
    const date: FromState = useFormState('');

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const form: Expense = {
            id: Math.random().toString(),
            title: title.value,
            price: +amount.value,
            date: new Date(date.value)
        }
        title.reset();
        amount.reset();
        date.reset();
        props.onAddExpense(form);
    }

    const onCloseErrorModal = () => {
        console.log('close modal')
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Enter Title" value={title.value} onChange={title.onChange} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" min="0.01" step="0.01" placeholder="Enter amount"
                            value={amount.value} onChange={amount.onChange} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" min="2021-01-01" max="2022-12-31"
                            value={date.value} onChange={date.onChange} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button className="expense" type="button" onClick={props.onCancel}>Cancel</button>
                    <button className="expense" type="submit">Submit</button>
                </div>
            </form>
            <ModalError title="Error" message="Wrong data" onClose={onCloseErrorModal} />
        </div>
    );
}

export default ExpenseForm;