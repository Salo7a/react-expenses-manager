import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import {useState} from "react";

const NewExpense = ({onAddExpense}) => {

    const [formOpen, setFormOpen] = useState(false);
    const handleAddExpense = (expense) => {
        onAddExpense({...expense, id: (Math.floor(Math.random() * 1000000000)) + ''});
        setFormOpen(false);
    }
    const handleNewExpenseClick = e => {
        setFormOpen(true);
    }
    const handleCancelExpenseClick = e => {
        setFormOpen(false);
    }
    if (formOpen)
        return (
            <div className='new-expense'>
                <ExpenseForm onAddExpense={handleAddExpense} onCancelExpense={handleCancelExpenseClick}/>
            </div>
        );
    else
        return (<div className='new-expense'>
            <button onClick={handleNewExpenseClick}>New Expense</button>
        </div>)
};

export default NewExpense;