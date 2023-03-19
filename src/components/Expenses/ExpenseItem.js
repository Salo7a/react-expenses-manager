import './ExpenseItem.css';
import DateIcon from "./DateIcon";
import Card from "../UI/Card";

function ExpenseItem({title, price, date}) {
    return (
        <Card className={'expense-item'}>
            <DateIcon date={date}/>
            <div className={'expense-item__description'}>
                <h2>{title}</h2>
                <div className={'expense-item__price'}>{price} E£</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;