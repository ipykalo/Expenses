import { HTMLProps } from "react";

export default interface ChartProps extends HTMLProps<object> {
    chartData: [{ label: string, value: string }];
}
