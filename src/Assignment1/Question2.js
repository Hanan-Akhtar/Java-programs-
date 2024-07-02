import { useState } from "react";

const Pelindrome = () => {
    const [value, setValue]=useState('');
    const [result, setResult]=useState('');
    const handle = () => {
        let string='';
        for (let i= value.length-1; i>=0; i--) {
             string +=value[i];
             if (value===string) {
                setResult("Yes it is pelindrome")
            } else {
              setResult("No it is pelindrome")
            }
          }
          
        
    }
    
    return ( 
        <>
        <h1>Check the input is a palindrome or not</h1>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <button onClick={handle}> Click me</button>
        <h2>{result}</h2>
        </>
     );
}
 
export default Pelindrome;