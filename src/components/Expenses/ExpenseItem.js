import './ExpenseItem.css';
import React , {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetails';
import Card from '../UI/Card';



function ExpenseItem(props)
{
  
  //  const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };
   

   return(
    <Card className="expense-item" >
     <ExpenseDate date={props.date}/>
     <ExpenseDetail title={props.title} amount={props.amount} /> 
     {/* <button onClick={clickHandler}>Delete</button> */}
    </Card>
    
   )
}

export default ExpenseItem