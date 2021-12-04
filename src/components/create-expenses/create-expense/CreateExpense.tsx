import "./CreateExpense.css"
import { HTMLProps } from "react";
import ExpenseForm from "../expense-form/ExpenseForm";

const CreateExpense = (props: HTMLProps<object>) => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default CreateExpense;