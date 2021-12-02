import "./Expesnse.css";
import Expense from "../../interfaces/Expense";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesProps from "./ExpensesProps";
import Card from "../card/Card";

function Expenses(props: ExpensesProps) {
    const expenseItems = props.items.map((item: Expense) => (
        <ExpenseItem key={item.id} item={item} />
    ));

    return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;