import React, { useState } from 'react'
const  Task3= () => {
  const [number,setNumber]=useState(30);
  let [result,setResult]=useState();
  const handle= () => {
    let boolean='';
    if (number%10===0) {
      boolean += "true";
  } else {
      boolean +="false";
      boolean.push(number)
      
  }
  setResult(boolean)
  }
  return ( 
    <div>
      <h1>Boolean</h1>
      <h2>{number}</h2>
      <button onClick={handle}>Click me</button>
      <h2>{result}</h2>
      </div>
   );
}
export default Task3;