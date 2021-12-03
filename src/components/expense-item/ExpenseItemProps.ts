import {HTMLProps } from "react";
import Expense from "../../interfaces/Expense";

export default interface ExpenseItemProps extends HTMLProps<object> {
    item: Expense;
}