import "./ExpenseItem.css";
import ExpenseItemProps from "./ExpenseItemProps";
import ExpenseDate from "../expense-date/ExpenseDate";

function ExpenseItem(props: ExpenseItemProps) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;