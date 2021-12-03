import { HTMLProps } from "react";
import Expense from "../../../interfaces/Expense";

export default interface ExpensesProps extends HTMLProps<object> {
    items: Expense[];
}