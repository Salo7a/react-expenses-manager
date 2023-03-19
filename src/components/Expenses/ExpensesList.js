import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpensesList({expenses}) {

    if (expenses.length === 0)
        return (<div><p>There are no recorded expenses for the current year</p></div>)

    const expenseItemList = expenses.map(expense => {
        return (<ExpenseItem key={expense.id} title={expense.title} price={expense.price}
                             date={expense.date}/>)
    })
    return (<ul className={'expenses-list'}>
            {expenseItemList}
        </ul>
    )
}

export default ExpensesList;