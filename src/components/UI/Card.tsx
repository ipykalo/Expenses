import "./Card.css";
import {HTMLProps } from "react";

const Card = (props: HTMLProps<object>) => {
    const classes = `card ${props.className}`;

    return <div className={classes}>{props.children}</div>;
}

export default Card;