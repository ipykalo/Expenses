import { HTMLProps } from "react";
import Validator from "../../../enums/Validators";
import Expense from "../../../interfaces/Expense";

export interface ExpenseFormProps extends HTMLProps<object> {
    onAddExpense: (data: Expense) => void;
    onCancel: () => void;
}

export interface FormState {
    [key: string]: {
        value: string,
        isValid: boolean;
        touched: boolean;
        errors: string[];
    };
}

export interface FormValidator {
    [Validator.Required]?: boolean;
    [Validator.MinLength]?: number;
    [Validator.MaxLength]?: number;
    [Validator.Min]?: string;
    [Validator.Max]?: string;
}

export interface FormAction {
    type: string;
    value: string;
    name: string;
    validator: FormValidator;
}

export type FormReducer = (state: FormState, action: FormAction) => FormState;
