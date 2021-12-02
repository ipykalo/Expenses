import './App.css';
import ExpenseItem from './components/expense-item/ExpenseItem';

function App() {
  return (
      <div>
        <h2>Expenses</h2>
        <ExpenseItem date={new Date()} title="Car" price={255.55} />
      </div>
  );
}

export default App;
