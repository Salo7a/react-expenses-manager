import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpense}) => {
    const handleNewExpense = (expense) => {
        onAddExpense({...expense, id: (Math.floor(Math.random() * 1000000000)) + ''});
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onAddNewExpense={handleNewExpense}/>
        </div>
    );
};

export default NewExpense;