import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

     const [ expenseTitle, setExpenseTitle ] = useState(props.data?.title);

    const expenseAmount = props.data?.amount;

    const clickHandler = () => {
        setExpenseTitle('updated');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.data?.date}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
