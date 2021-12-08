import './App.css';
import React, { Fragment, useState } from 'react';
import CreateExpense from './components/create-expenses/create-expense/CreateExpense';
import Expenses from './components/expenses/expenses-list/Expenses';
import Expense from './interfaces/Expense';

const App = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const onAddExpense = (newItem: Expense): void => {
        setExpenses((prevState: Expense[]): Expense[] => {
            return [newItem, ...prevState];
        });
    }

    return (
        <Fragment>
            <CreateExpense onAddExpense={onAddExpense} />
            <Expenses items={expenses} />
        </Fragment>
    );
}

export default App;
