import "./ExpenseItem.css";
import ExpenseItemProps from "./ExpenseItemProps";
import ExpenseDate from "../expense-date/ExpenseDate";

function ExpenseItem(props: ExpenseItemProps) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.item.date} />
            <div className="expense-item__description">
                <h2>{props.item.title}</h2>
                <div className="expense-item__price">${props.item.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;