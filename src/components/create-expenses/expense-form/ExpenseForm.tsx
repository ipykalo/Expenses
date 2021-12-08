import "./ExpenseForm.css"
import React, { Fragment, useState } from "react";
import { FormEvent } from "react";
import FromState from "../../../interfaces/FormState";
import { useFormState } from "../../../hooks/FormState";
import ExpenseFormProps from "./ExpenseFormProps";
import Expense from "../../../interfaces/Expense";
import ModalError from "../../UI/modal-error/ModalError";
import { ModalErrorObj } from "../../UI/modal-error/ModalErrorProps";

const ExpenseForm = (props: ExpenseFormProps) => {
    const title: FromState = useFormState('');
    const amount: FromState = useFormState('');
    const date: FromState = useFormState('');

    const [errors, setError] = useState<ModalErrorObj[]>([]);
    const [showModal, setModalVisibility] = useState(false);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const isValid: boolean = validateFilds();

        if (!isValid) {
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

    const onCloseErrorModal = (): void => {
        setModalVisibility(false);
    }

    const validateFilds = (): boolean => {
        let modalErrors: ModalErrorObj[] = [];

        if (!title.value || !amount.value || !date.value) {
            modalErrors.push({
                title: 'Error',
                message: 'Enter all required fields.'
            });
        }

        if (title.value.length < 5) {
            modalErrors.push({
                title: 'Error',
                message: 'Title length should not be less than 5 chars.'
            });
        }

        if (modalErrors.length) {
            setError(modalErrors);
            setModalVisibility(true);
        }
        return modalErrors.length === 0;
    }

    return (
        <Fragment>
            <form onSubmit={onFormSubmit}>
                <div className="new-expense__controls form-control">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Enter Title" value={title.value}
                            onChange={title.onChange} className={errors.length && (!title.value || title.value.length < 5) ? 'invalid' : ''} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" min="0.01" step="0.01" placeholder="Enter amount"
                            value={amount.value} onChange={amount.onChange} className={errors.length && !amount.value ? 'invalid' : ''} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" min="2021-01-01" max="2022-12-31" value={date.value}
                            className={errors.length && !date.value ? 'invalid' : ''} onChange={date.onChange} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button className="expense" type="button" onClick={props.onCancel}>Cancel</button>
                    <button className="expense" type="submit">Submit</button>
                </div>
            </form>
            <ModalError
                show={showModal}
                errors={errors}
                onClose={onCloseErrorModal}
            />
        </Fragment>
    );
}

export default ExpenseForm;