import "./ExpenseItem.css";
import ExpenseItemProps from "./ExpenseItemProps";

function ExpenseItem(props: ExpenseItemProps) {
    return (
        <div className="expense-item">
            <div>{props.date.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;