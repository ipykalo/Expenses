import {HTMLProps, Props } from "react";

export default interface ExpenseDateProps extends HTMLProps<Props<object>> {
    date: Date;
}