import './App.css';
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {

    const [expenses, setExpenses] = useState([
        {
            id: '1',
            title: 'License',
            price: '1,924',
            date: new Date(2023, 2, 18)
        },
        {
            id: '2',
            title: 'Shopping',
            price: '119.95',
            date: new Date(2023, 2, 17)
        }
    ]);
    const addExpense = (expense) => {
        setExpenses((oldExpenses) => [expense, ...oldExpenses])
    }
    return (
        <div className="App">
            <div className="App-header">
                <NewExpense onAddExpense={addExpense}/>
                <ExpensesList expenses={expenses}/>
            </div>
        </div>
    );
}

export default App;
