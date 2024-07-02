import React, { useState } from 'react';
 
   const  Task5= () => {
    const [array,setArray]=useState([7,2,5]);
    const [result,setResult]=useState([]);
    // let temp='';
   const  handle= () => {
    let value=[];
    for (let i = 0; i < array.length; i++) {
      
      for (let j=i+1; j<array.length;  j++) {
          if (array[i]>array[j]) {
            let temp =array[i];
            array[i]=array[j];
            array[j]=temp;
          }
        }
     }
     setResult(value);
     
   }

    
    return (  
      <div>
        <h1>{array}</h1>
        <button onClick={handle}>click me</button>
        <h1>{result}</h1>
        </div>
    );
   }
    
   export default Task5;

   
   