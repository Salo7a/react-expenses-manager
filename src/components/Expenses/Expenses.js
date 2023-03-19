import './Expenses.css';
import ExpensesList from "./ExpensesList";
import {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === Number(filteredYear))

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (<div>

            <Card className={'expenses'}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;