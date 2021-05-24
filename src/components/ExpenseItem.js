import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props){

    const expenseTitle = props.data?.title;
    const expenseAmount = props.data?.amount;

    return  <div className="expense-item">
         <ExpenseDate date={props.data?.date}></ExpenseDate>    
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2> 
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    </div>
}

export default ExpenseItem; 