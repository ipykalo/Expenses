import {HTMLProps } from "react";

export default interface ExpensesFilterProps extends HTMLProps<object> {
    onSelectFilter: (filter: string) => void;
}
