import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(props){

    const expenses = props.items;

    return (
        <Card className="expenses">
            <ExpenseItem data={expenses[0]}></ExpenseItem>
            <ExpenseItem data={expenses[1]}></ExpenseItem>
            <ExpenseItem data={expenses[2]}></ExpenseItem>
            <ExpenseItem data={expenses[3]}></ExpenseItem>
        </Card>
 
    );
}

export default Expenses;