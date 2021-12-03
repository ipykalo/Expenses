import './App.css';
import Expenses from './components/expenses/expenses-list/Expenses';
import Expense from './interfaces/Expense';

const App = () => {
    const expenses: Expense[] = [
        {id: '01sds', date: new Date("11/27/21"), title:"Car", price: 248.55},
        {id: '03sws', date: new Date("11/29/21"), title:"Car", price: 155.35},
        {id: '02qds', date: new Date("12/01/21"), title:"Car", price: 255.00},
        {id: '02fds', date: new Date("12/02/21"), title:"Car", price: 555.60}
    ];

    return (
        <div>
            <h2>Expenses</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
