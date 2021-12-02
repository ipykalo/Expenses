import './App.css';
import ExpenseItem from './components/expense-item/ExpenseItem';

function App() {

    return (
        <div>
            <h2>Expenses</h2>
            <ExpenseItem date={new Date("11/25/21")} title="Car" price={255.55}/>
            <ExpenseItem date={new Date("12/01/21")} title="Car" price={255.55}/>
            <ExpenseItem date={new Date("12/02/21")} title="Car" price={255.55}/>
        </div>
    );
}

export default App;
