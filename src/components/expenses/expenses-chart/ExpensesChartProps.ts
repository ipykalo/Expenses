import { HTMLProps } from "react";
import Expense from "../../../interfaces/Expense";

export default interface ExpensesChartProps extends HTMLProps<object> {
    expenses: Expense[];
}
