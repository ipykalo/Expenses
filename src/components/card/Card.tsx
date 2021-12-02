import "./Card.css";
import {HTMLProps, Props } from "react";

function Card(props: HTMLProps<Props<object>>) {
    const classes = `card ${props.className}`;

    return <div className={classes}>{props.children}</div>;
}

export default Card;