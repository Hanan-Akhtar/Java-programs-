import React from 'react';
import { useState } from "react";


export const Home = () => {
    return(
        <><h1>Question1 to Question5</h1></>
    )
}
// Question 1 strt here

export const Question1 = () => {
    const [value, setValue] = useState('hello');
    const [result, setResult] = useState('');
    const handle = () => {
        let newList = '';
        let character = '';
        for (let i = value.length - 1; i >= 0; i--) {
            newList = value[i];
            for (let i = 0; i < newList.length; i++) {
                let char = newList[i];
                if (char >= 'a' && char <= 'z') {
                    character += char.toUpperCase();
                } else if (char >= 'A' && char <= 'Z') {
                    character += char.toLowerCase();
                } else {
                    character += char;
                }
                setResult(newList);
            }
            setResult(character);
        }
    }
    return (<><h1>Click the button and reverse the list and change the case</h1>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit" onClick={handle}> Click me</button>
        <h2>{result}</h2></>
    )
}
// Question 1 end here

// Question 2 strt here

export const Pelindrome = () => {
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
// Question 2 end here

// Question 3 strt here
export const Question3 = () => {
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
// Question 3 end here

// Question 4 strt here
export const Question4 = () => {
    const [inputArray, setInputArray] = useState([]);
    const [maxValue, setMaxValue] = useState(null);
    const [minValue, setMinValue] = useState(null);
  
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      const newArray = inputValue
        .split(',')
        .map((num) => (isNaN(num) ? null : parseFloat(num.trim())));
      setInputArray(newArray);
    };
    const findMaxMin = () => {
      let max = inputArray[0];
      let min = inputArray[0];
  
      inputArray.forEach((num) => {
        if (num > max) {
          max = num;
        }
        if (num < min) {
          min = num;
        }
      });
  
      setMaxValue(max);
      setMinValue(min);
    };
  
    return (
      <div>
          <h1> Enter numbers (comma-separated):</h1>
        <label>
          <input type="text" onChange={handleInputChange} />
        </label>
        <button onClick={findMaxMin}>Find Max and Min</button>
  
        <div>
          {inputArray.length > 0 && (
            <p>Array: [{inputArray.join(', ')}]</p>
          )}
          {maxValue !== null && <p>Maximum Value: {maxValue}</p>}
          {minValue !== null && <p>Minimum Value: {minValue}</p>}
        </div>
      </div>
    );
  };
  // Question 4 end here

  // Question 5 strt here
export  const  Question5= () => {
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
   // Question 5 end here 
   
 



