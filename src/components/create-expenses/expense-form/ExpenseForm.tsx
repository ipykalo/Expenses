import "./ExpenseForm.css"
import React from "react";
import { FormEvent, HTMLProps } from "react";
import FromState from "../../../interfaces/FormState";
import { useFormState } from "../../../hooks/FormState";

const ExpenseForm = (props: HTMLProps<object>) => {
    const title: FromState = useFormState('');
    const amount: FromState = useFormState('');
    const date: FromState = useFormState('');

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const form = {
            title: title.value,
            amount: amount.value,
            date: date.value
        }
        title.reset();
        amount.reset();
        date.reset();
    }

    return (
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
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;