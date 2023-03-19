import './ExpensesList.css';
import './ExpenseItem';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import {useState} from "react";

function ExpensesList({expenses}) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === Number(filteredYear))

    const expenseItemList = filteredExpenses.map(expense => {
        return (<ExpenseItem key={expense.id} title={expense.title} price={expense.price}
                             date={expense.date}/>)
    })

    return (
        <Card className={'expenses-list'}>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expenseItemList}
        </Card>
    )
}

export default ExpensesList;