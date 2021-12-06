import "./Chart.css";
import React from "react";
import ChartBar from "../chart-bar/ChartBar";
import ChartProps from "./ChartProps";

const Chart = (props: ChartProps) => {
    const chrtItems = props.chartData.map(i => <ChartBar key={i.label} label={i.label} value={i.value} maxValue={10} />);

    return (
        <div className="chart">
            {chrtItems}
        </div>
    )
}

export default Chart;