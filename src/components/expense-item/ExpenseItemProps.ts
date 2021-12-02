import { Props } from "react";

export default interface ExpenseItemProps extends Props<object> {
    date: Date;
    title: string;
    price: number;
}