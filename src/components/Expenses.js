import ExpenseItem from './ExpenseItem'
import './Expenses.css'


function Expenses(props){

    const expenses = props.items;

    return (
        <div className="expenses">
            <ExpenseItem data={expenses[0]}></ExpenseItem>
            <ExpenseItem data={expenses[1]}></ExpenseItem>
            <ExpenseItem data={expenses[2]}></ExpenseItem>
            <ExpenseItem data={expenses[3]}></ExpenseItem>
        </div>
    );
}

export default Expenses;