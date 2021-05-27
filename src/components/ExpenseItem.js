import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props){

    const expenseTitle = props.data?.title;
    const expenseAmount = props.data?.amount;

    return(
    <Card className="expense-item">
         <ExpenseDate date={props.data?.date}></ExpenseDate>    
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2> 
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </Card>
    );
}

export default ExpenseItem; 