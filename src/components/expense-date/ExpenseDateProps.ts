import {HTMLProps } from "react";

export default interface ExpenseDateProps extends HTMLProps<object> {
    date: Date;
}