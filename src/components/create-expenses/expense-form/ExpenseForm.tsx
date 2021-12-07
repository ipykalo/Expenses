import "./ExpenseForm.css"
import React, { useState } from "react";
import { FormEvent } from "react";
import FromState from "../../../interfaces/FormState";
import { useFormState } from "../../../hooks/FormState";
import ExpenseFormProps from "./ExpenseFormProps";
import Expense from "../../../interfaces/Expense";
import ModalError from "../../UI/modal-error/ModalError";
import ModalErrorObj from "../../UI/modal-error/ModalErrorObj";

const ExpenseForm = (props: ExpenseFormProps) => {
    const title: FromState = useFormState('');
    const amount: FromState = useFormState('');
    const date: FromState = useFormState('');
    const [error, setError] = useState<ModalErrorObj | null>(null);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (!title.value || !amount.value || !date.value) {
            setError({
                title: 'Error',
                message: 'Enter all required fields.'
            });
            return;
        }

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
        setError(null);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} noValidate>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input required type="text" id="title" placeholder="Enter Title" value={title.value} onChange={title.onChange} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input required type="number" id="amount" min="0.01" step="0.01" placeholder="Enter amount"
                            value={amount.value} onChange={amount.onChange} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input required type="date" id="date" min="2021-01-01" max="2022-12-31"
                            value={date.value} onChange={date.onChange} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button className="expense" type="button" onClick={props.onCancel}>Cancel</button>
                    <button className="expense" type="submit">Submit</button>
                </div>
            </form>
            {error && <ModalError title={error.title} message={error.message} onClose={onCloseErrorModal} />}
        </div>
    );
}

export default ExpenseForm;