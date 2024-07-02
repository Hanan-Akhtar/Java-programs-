import React, { useState } from 'react';
 
   const  Question5= () => {
    const [array,setArray]=useState([  8, 7, 6, 5, 0, 3, 2, 1]);
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
        <h1>Sorted array </h1>
        <h2>{array}</h2>
        <h2>{result}</h2>
        <button onClick={handle}>click me</button>
        </div>
    );
   }
    
   export default Question5;