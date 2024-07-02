import React from 'react';
import { useState,useEffect } from "react";


export const About = () => {
    return ( 
        <><h1>Question6 to Question10</h1></>
     );
}
 
// question 6  strt here
export const   Question6= () => {
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
}// question 6  end here

// question 7  strt here
export const Question7 = () => {
    const [myArray, setMyArray] = useState([]);
    const [inputValue, setInputValue] = useState("");
  
    const addValue = () => {
      if (inputValue.trim() !== "") {
        setMyArray([...myArray, inputValue]);
        setInputValue("");
      }
    };
  
    const removeValue = () => {
      const newArray = [...myArray];
        newArray.splice(0, 1);
        setMyArray(newArray);
     
    };
  
    return (
      <div className="filter_number">
        <h3>Task#7</h3>
        <div className="counter">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addValue}>Add</button>
          <button onClick={ removeValue}>Remove</button>
          <p> Array:{myArray?.map((val) => val + ", ")}</p>
        </div>
      </div>
    );
  };// question 7  end here

  // question 8  strt here
  export const Question8 = () => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');
  
    const handleOperandChange = (e, operand) => {
      const value = e.target.value;
      // Validate input to allow only numeric values
      if (!isNaN(value) || value === '') {
        if (operand === 'operand1') {
          setOperand1(value);
        } else {
          setOperand2(value);
        }
      }
    };
  
    const handleOperationChange = (e) => {
      setOperation(e.target.value);
    };
  
    const handleCalculate = () => {
      if (operand1 !== '' && operand2 !== '' && operation !== '') {
        let resultValue;
        switch (operation) {
          case '+':
            resultValue = parseFloat(operand1) + parseFloat(operand2);
            break;
          case '-':
            resultValue = parseFloat(operand1) - parseFloat(operand2);
            break;
          case '*':
            resultValue = parseFloat(operand1) * parseFloat(operand2);
            break;
          case '/':
            resultValue = parseFloat(operand1) / parseFloat(operand2);
            break;
          default:
            resultValue = 'Invalid Operation';
        }
        setResult(resultValue);
      } else {
        setResult('Invalid Input');
      }
    };
  
    return (
      <div>
        <h2>Simple Calculator</h2>
        <div>
          <label>Operand 1:</label>
          <input type="text" value={operand1} onChange={(e) => handleOperandChange(e, 'operand1')} />
        </div>
        <div>
          <label>Operation:</label>
          <select value={operation} onChange={handleOperationChange}>
            <option value="">Select Operation</option>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
        </div>
        <div>
          <label>Operand 2:</label>
          <input type="text" value={operand2} onChange={(e) => handleOperandChange(e, 'operand2')} />
        </div>
        <button onClick={handleCalculate}>Calculate</button>
        <div>
          <label>Result:</label>
          <input type="text" value={result} readOnly />
        </div>
      </div>
    );
  };// question 8  end here

  // question 9  strt here

  export const Question9 = () => {
    const [shape, setShape] = useState('rectangle');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [base, setBase] = useState('');
    const [height, setHeight] = useState('');
    const [radius, setRadius] = useState('');
    const [result, setResult] = useState(null);
  
    const handleShapeChange = (e) => {
      setShape(e.target.value);
      setResult(null); 
    };
  
    const handleLengthChange = (e) => {
      setLength(e.target.value);
      setResult(null); 
    };
  
    const handleWidthChange = (e) => {
      setWidth(e.target.value);
      setResult(null); 
    };
  
    const handleBaseChange = (e) => {
      setBase(e.target.value);
      setResult(null); 
    };
  
    const handleHeightChange = (e) => {
      setHeight(e.target.value);
      setResult(null); 
    };
  
    const handleRadiusChange = (e) => {
      setRadius(e.target.value);
      setResult(null); 
    };
  
    const handleCalculate = () => {
      switch (shape) {
        case 'rectangle':
          setResult(parseFloat(length) * parseFloat(width));
          break;
        case 'triangle':
          setResult((parseFloat(base) * parseFloat(height)) / 2);
          break;
        case 'circle':
          setResult(Math.PI * Math.pow(parseFloat(radius), 2));
          break;
        default:
          setResult(null);
      }
    };
  
    return (
      <div>
        <label htmlFor="shape">Select Shape:</label>
        <select id="shape" value={shape} onChange={handleShapeChange}>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
          <option value="circle">Circle</option>
        </select>
  
        {shape === 'rectangle' && (
          <div>
            <label htmlFor="length">Length:</label>
            <input type="number" id="length" value={length} onChange={handleLengthChange} />
  
            <label htmlFor="width">Width:</label>
            <input type="number" id="width" value={width} onChange={handleWidthChange} />
          </div>
        )}
  
        {shape === 'triangle' && (
          <div>
            <label htmlFor="base">Base:</label>
            <input type="number" id="base" value={base} onChange={handleBaseChange} />
  
            <label htmlFor="height">Height:</label>
            <input type="number" id="height" value={height} onChange={handleHeightChange} />
          </div>
        )}
  
        {shape === 'circle' && (
          <div>
            <label htmlFor="radius">Radius:</label>
            <input type="number" id="radius" value={radius} onChange={handleRadiusChange} />
          </div>
        )}
  
        <button onClick={handleCalculate}>Calculate Area</button>
  
        {result !== null && <p>The area is: {result}</p>}
      </div>
    );
  };
  // question 9  end here

  // question 10  strt here

export const Question10 = () => {

    const [blog, setBlog] = useState([
        {
            title: "Science",
            description: "sci-fi",
            type: "blog",
            date: "12-29-2023",
        },
        {
            title: "Sports",
            description: "sci-fi",
            type: "blog",
            date: "12-29-2023",
        },
        {
            title: "Movies",
            description: "sci-fi",
            type: "blog",
            date: "12-29-2023",
        }
    ])
    const [selectedData, setSelectedData] = useState()

    const handleDetail = (e) => {
        console.log(e.target.value, "obj")
        let blogname = e.target.value;
        let newData = blog.filter(val => val.title == blogname)
        setSelectedData(newData)
        console.log(selectedData, 'new---')
    }

    useEffect(() => {
      console.log(selectedData)
    }, [selectedData])
    


    return (
        <div>
            <input value={blog} onChange={(e)=>setBlog(e.target.value)}/>
            <select name="blog_data" id="blog" onChange={handleDetail}>
                {blog.map((val, index) => <option value={val.title}>{val.title}</option>)}

            </select>
            {selectedData?.length > 0 &&
                selectedData.map((val, index) => (
                    <div key={index}>
                        <p>{val.title}</p>
                        <p>{val.description}</p>
                        <p>{val.type}</p>
                        <p>{val.date}</p>
                    </div>
                ))}
        </div>
    );
} 
// question 9  end here