import './App.css';
import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const [expenses, setExpenses] = useState([
        {
            id: '1',
            title: 'License',
            price: 1924,
            date: new Date(2023, 2, 18)
        },
        {
            id: '2',
            title: 'Shopping',
            price: 119.95,
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
                <Expenses expenses={expenses}/>
            </div>
        </div>
    );
}

export default App;
