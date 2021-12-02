import { Props } from "react";
import Expense from "../../interfaces/Expense";

export default interface ExpenseItemProps extends Props<object> {
    item: Expense;
};