import { HTMLProps } from "react";
import ExpensesMonths from "../../../enums/ExpensesMonths";

export default interface ChartProps extends HTMLProps<object> {
    chartData: { label: ExpensesMonths, value: number }[];
    maxValue: number;
}
