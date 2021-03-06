import {HTMLProps } from "react";
import Expense from "../../../interfaces/Expense";

export default interface CreateExpenseProps extends HTMLProps<object> {
    onAddExpense: (data: Expense) => void;
}
