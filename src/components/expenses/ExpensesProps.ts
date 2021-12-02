import { Props } from "react";
import Expense from "../../interfaces/Expense";

export default interface ExpensesProps extends Props<object> {
    items: Expense[];
}