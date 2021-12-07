import "./Chart.css";
import React from "react";
import ChartBar from "../chart-bar/ChartBar";
import ChartProps from "./ChartProps";

const Chart = (props: ChartProps) => {
    const chartBarElements = props.chartData.map(i => (
        <ChartBar
            key={i.label}
            label={i.label}
            value={i.value}
            maxValue={props.maxValue}
        />
    ));

    return (<div className="chart">{chartBarElements}</div>);
}

export default Chart;