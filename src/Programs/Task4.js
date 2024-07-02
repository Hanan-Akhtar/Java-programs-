import React, { useState } from "react";

const Task4 = () => {
    const [str,setStr]=useState('')
    const handle = () => {
       let count=0;
       for (let i = 0; i < str.length; i++) {
        if (str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' ) {
         count ++;   
        }
       }
       setStr (count) ;
    }
    return (  
        <div>
            <h1>Count Vowels</h1>
            <input type="text" value={str} onChange={(e)=>setStr(e.target.value)} required />
            <button onClick={handle}>Click me</button>
        </div>
    );
}
 
export default Task4;