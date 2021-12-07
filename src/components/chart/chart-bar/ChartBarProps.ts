import { HTMLProps } from "react";
import ExpensesMonths from "../../../enums/ExpensesMonths";

export default interface ChartProps extends HTMLProps<object> {
    label: ExpensesMonths;
    value: number;
    maxValue: number;
}
