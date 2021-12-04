import "./ExpenseForm.css"
import { HTMLProps } from "react";

const ExpenseForm = (props: HTMLProps<object>) => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Enter Title"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="price">Amount</label>
                    <input type="text" id="price" min="0.01" step="0.01" placeholder="Enter amount"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2021-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;