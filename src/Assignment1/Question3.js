import { useState } from "react";

const Question3 = () => {
    const [factorial,setFactorial]=useState();
    const [num,setNum]=useState(5);
    const handle = () => {
        let value=1;
        for (let i = 1; i <= num; i++) {
            value *=i;
            setFactorial(value)
        }
    }
    
    return ( 
        <>
        <h1>Calculate the factorial </h1>
        <input type="text" value={num} onChange={(e)=> setNum(e.target.value)}/>
        <button onClick={handle}>Click me</button>
        <h2>{factorial}</h2></>
     );
}
 
export default Question3;