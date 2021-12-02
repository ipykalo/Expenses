import Expense from "../../interfaces/Expense";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesProps from "./ExpensesProps";

function Expenses(props: ExpensesProps) {
    const expenseItems = props.expenses.map((item: Expense) => (
        <ExpenseItem key={item.id} item={item} />
    ));
    return(
        <div>
            <h2>Expenses</h2>
            {expenseItems}
        </div>
    )
}

export default Expenses;