import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props){

    const expenses = props.items;

    return (
        <Card className="expenses">
            <ExpenseItem data={expenses[0]}/>
            <ExpenseItem data={expenses[1]}/>
            <ExpenseItem data={expenses[2]}/>
            <ExpenseItem data={expenses[3]}/>
        </Card>

    );
}

export default Expenses;
