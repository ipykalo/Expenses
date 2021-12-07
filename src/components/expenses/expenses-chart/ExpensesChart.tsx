import React from "react";
import Chart from "../../chart/chart/Chart";
import ExpensesChartProps from "./ExpensesChartProps";
import ExpensesMonths from "../../../enums/ExpensesMonths";

const ExpensesChart = (props: ExpensesChartProps) => {
    const CHART_DATA = [
        { label: ExpensesMonths.Jan, value: 0 },
        { label: ExpensesMonths.Feb, value: 0 },
        { label: ExpensesMonths.Mar, value: 0 },
        { label: ExpensesMonths.Apr, value: 0 },
        { label: ExpensesMonths.May, value: 0 },
        { label: ExpensesMonths.Jun, value: 0 },
        { label: ExpensesMonths.Jul, value: 0 },
        { label: ExpensesMonths.Aug, value: 0 },
        { label: ExpensesMonths.Sep, value: 0 },
        { label: ExpensesMonths.Oct, value: 0 },
        { label: ExpensesMonths.Nov, value: 0 },
        { label: ExpensesMonths.Dec, value: 0 }
    ];

    for (let item of props.expenses) {
        CHART_DATA[item.date.getMonth()].value += item.price;
    }

    const priceList: number[] = props.expenses.map(i => i.price);
    const maxValue: number = Math.max(...priceList);

    return <Chart chartData={CHART_DATA} maxValue={maxValue} />;
}

export default ExpensesChart;