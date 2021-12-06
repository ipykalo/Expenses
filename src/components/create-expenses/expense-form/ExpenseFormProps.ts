import {HTMLProps } from "react";
import Expense from "../../../interfaces/Expense";

export default interface ExpenseFormProps extends HTMLProps<object> {
    onAddExpense: (data: Expense) => void;
    onCancel: () => void;
}
