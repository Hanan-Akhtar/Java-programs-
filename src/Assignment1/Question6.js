import { useState } from "react";

const   Question6= () => {
    const [count,setcount]=useState(0)
    const  increaseNumber = () => {
        setcount(count+1);
    }
    const  decreaseNumber = () => {
        setcount( count-1);

    }
    return ( 
        <div>
            <h1> Increment and Decrement the counter value</h1>
            <button  onClick={increaseNumber}>+</button>
        <input type='number' value={count} onChange={(e)=>{
            setcount(Number(e.target.value))
        }}></input>
        <button onClick={decreaseNumber}>-</button>
        </div>
        
     );
}
 
export default Question6;