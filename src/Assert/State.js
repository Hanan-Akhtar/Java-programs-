import { useState } from "react";

const  State= () => {
    const [count,setcount]=useState(0)
    const  increaseNumber = () => {
        setcount(count+1);
    }
    const  decreaseNumber = () => {
        setcount( count-1);

    }
    return ( 
        <div>
            <button  onClick={increaseNumber}>+</button>
        <input type='number' value={count} onChange={(e)=>{
            setcount(Number(e.target.value))
        }}></input>
        <button onClick={decreaseNumber}>-</button>
        </div>
        
     );
}
 
export default State;