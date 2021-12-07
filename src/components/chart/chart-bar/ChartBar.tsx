import "./ChartBar.css";
import React from "react";
import ChartProps from "./ChartBarProps";

const ChartBar = (props: ChartProps) => {
    let barHeight: string = "0%";

    if (props.maxValue > 0) {
        barHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;