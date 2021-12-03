import "./ExpenseItem.css";
import ExpenseItemProps from "./ExpenseItemProps";
import ExpenseDate from "../expense-date/ExpenseDate";
import Card from "../../UI/Card";

const ExpenseItem = (props: ExpenseItemProps) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.item.date} />
            <div className="expense-item__description">
                <h2>{props.item.title}</h2>
                <div className="expense-item__price">${props.item.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;