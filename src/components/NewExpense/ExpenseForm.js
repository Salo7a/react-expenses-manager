import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = ({onAddExpense, onCancelExpense}) => {

    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState(0);
    const [newDate, setNewDate] = useState('');

    const handleTitleChange = e => {
        setNewTitle(e.target.value);
    }
    const handlePriceChange = e => {
        setNewPrice(e.target.value);
    }
    const handleDateChange = e => {
        setNewDate(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newExpense = {
            title: newTitle,
            price: newPrice,
            date: new Date(newDate)
        };
        onAddExpense(newExpense);
        setNewTitle('');
        setNewPrice(0);
        setNewDate('');
    }
    const handleCancel = e => {
        onCancelExpense()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={handleTitleChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01' value={newPrice} onChange={handlePriceChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' value={newDate} onChange={handleDateChange}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={handleCancel}>Cancel Expense</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;