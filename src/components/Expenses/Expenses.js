import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
function Expenses(props){


    return (
        <Card className="expenses">
            {props.items.map( data  =>  (<ExpenseItem data={data}/>)) }
        </Card>

    );
}

export default Expenses;
