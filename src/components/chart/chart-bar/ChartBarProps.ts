import { HTMLProps } from "react";

export default interface ChartProps extends HTMLProps<object> {
    label: string;
    value: string;
    maxValue: number;
}
