import {HTMLProps, Props } from "react";
import Expense from "../../interfaces/Expense";

export default interface ExpenseItemProps extends HTMLProps<Props<object>> {
    item: Expense;
};