import "./ExpenseForm.css"
import React, { ChangeEvent, Fragment, useReducer, useState } from "react";
import { FormEvent } from "react";
import { ExpenseFormProps, FormAction, FormReducer, FormState } from "./ExpenseFormInterfaces";
import Expense from "../../../interfaces/Expense";
import ModalError from "../../UI/modal-error/ModalError";
import { ModalErrorObj } from "../../UI/modal-error/ModalErrorProps";
import Validator from "../../../enums/Validators";

const ExpenseForm = (props: ExpenseFormProps) => {
    const formModel: FormState = {
        title: {
            value: '',
            isValid: false,
            touched: false,
            errors: []
        },
        amount: {
            value: '',
            isValid: false,
            touched: false,
            errors: []
        },
        date: {
            value: '',
            isValid: false,
            touched: false,
            errors: []
        }
    };

    const reducer: FormReducer = (state: FormState, action: FormAction): FormState => {
        const errors = getErrors(action);
        let isValid: boolean = isRequiredValid(action) && isMinLengthValid(action) && isMaxLengthValid(action) && isMinValid(action) && isMaxValid(action);

        return {
            ...state,
            [action.name]: {
                errors,
                value: action.value,
                isValid: isValid,
                touched: action.type === 'blur' ? true : state[action.name].touched
            }
        };
    }

    const getErrors = (action: FormAction): string[] => {
        const errors: string[] = [];
        const errorsMsg = {
            [Validator.Required]: `The ${action.name} field is required`,
            [Validator.MinLength]: `The length of ${action.name} field should not be less than ${action.validator.minLength} chars`,
            [Validator.MaxLength]: `The length of ${action.name} field should not be more than ${action.validator.maxLength} chars`,
            [Validator.Min]: `The value of ${action.name} field should not be less ${action.validator.min}`,
            [Validator.Max]: `The value of ${action.name} field should not more ${action.validator.max}`,
        }
        !isRequiredValid(action) && errors.push(errorsMsg.required);
        !isMinLengthValid(action) && errors.push(errorsMsg.minLength);
        !isMaxLengthValid(action) && errors.push(errorsMsg.maxLength);
        !isMinValid(action) && errors.push(errorsMsg.min);
        !isMaxValid(action) && errors.push(errorsMsg.max);

        return errors;
    }

    const isRequiredValid = (action: FormAction): boolean => action.validator.hasOwnProperty('required') ? !!action.value : true;

    const isMinLengthValid = (action: FormAction): boolean => {
        const min = action.validator?.minLength || -1;
        return action.validator.hasOwnProperty('minLength') && min > -1 ? action.value.length >= min : true;
    }

    const isMaxLengthValid = (action: FormAction): boolean => {
        const max = action.validator?.maxLength || -1;
        return action.validator.hasOwnProperty('maxLength') && max > -1 ? action.value.length <= max : true;
    }

    const isMinValid = (action: FormAction): boolean => {
        const min = action.validator?.min || '';
        return action.validator.hasOwnProperty('min') && min ? action.value >= min : true;
    }

    const isMaxValid = (action: FormAction): boolean => {
        const max = action.validator?.max || '';
        return action.validator.hasOwnProperty('min') && max ? action.value <= max : true;
    }

    const [formState, dispatchFn] = useReducer(reducer, formModel);

    const onInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const el: HTMLInputElement = event.target;
        const action: FormAction = {
            type: event.type,
            value: el.value,
            name: el.name,
            validator: {}
        }
        el.required && (action.validator[Validator.Required] = true);
        el.minLength > -1 && (action.validator[Validator.MinLength] = el.minLength);
        el.maxLength > -1 && (action.validator[Validator.MaxLength] = el.maxLength);
        el.min && (action.validator[Validator.Min] = el.min);
        el.max && (action.validator[Validator.Max] = el.max);

        dispatchFn(action);
    }

    const [errors, setError] = useState<ModalErrorObj[]>([]);
    const [showModal, setModalVisibility] = useState(false);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const modalErrors: ModalErrorObj[] = getModalErrors();
        let isValid: boolean = getValidFormFlag();

        if (modalErrors.length) {
            setError(modalErrors);
            setModalVisibility(true);
        }

        if (!isValid) {
            return;
        }
        const form: Expense = {
            id: Math.random().toString(),
            title: formState.title.value,
            price: +formState.amount.value,
            date: new Date(formState.date.value)
        }
        props.onAddExpense(form);
    }

    const getModalErrors = (): ModalErrorObj[] => {
        const modalErrors: ModalErrorObj[] = [];

        for (const key in formState) {
            if (formState[key].errors.length) {
                modalErrors.push({
                    title: key,
                    message: `Plese fix ${formState[key].errors.length} errors`
                });
            }
        }
        return modalErrors;
    }

    const getValidFormFlag = (): boolean => {
        for (const key in formState) {
            if (!formState[key].isValid) {
                return false;
            }
        }
        return true;
    }

    const onCloseErrorModal = (): void => {
        setModalVisibility(false);
    }

    return (
        <Fragment>
            <form onSubmit={onFormSubmit} noValidate>
                <div className="new-expense__controls form-control">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder="Enter Title" onChange={onInputHandler} onBlur={onInputHandler}
                            value={formState.title.value} name="title" minLength={5} maxLength={10} required
                            className={formState.title.touched && !formState.title.isValid ? 'invalid' : ''} />
                        {formState.title.errors.map(e => <label className="error" key={e}>{e}</label>)}
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" min="0.01" step="0.01" placeholder="Enter amount" name="amount" required onBlur={onInputHandler}
                            value={formState.amount.value} onChange={onInputHandler} className={formState.amount.touched && !formState.amount.isValid ? 'invalid' : ''} />
                        {formState.amount.errors.map(e => <label className="error" key={e}>{e}</label>)}
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" min="2021-01-01" max="2022-12-31" value={formState.date.value} name="date" required onBlur={onInputHandler}
                            className={formState.date.touched && !formState.date.isValid ? 'invalid' : ''} onChange={onInputHandler} />
                        {formState.date.errors.map(e => <label className="error" key={e}>{e}</label>)}
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button className="expense" type="button" onClick={props.onCancel}>Cancel</button>
                    <button className="expense" type="submit">Submit</button>
                </div>
            </form>
            <ModalError
                title="Validation Error"
                show={showModal}
                errors={errors}
                onClose={onCloseErrorModal}
            />
        </Fragment>
    );
}

export default ExpenseForm;