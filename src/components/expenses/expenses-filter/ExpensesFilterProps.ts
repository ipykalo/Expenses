import {HTMLProps } from "react";

export default interface ExpensesFilterProps extends HTMLProps<object> {
    selectedYear: string;
    onSelectFilter: (filter: string) => void;
}
