import React, { useState } from 'react';

const Question8 = () => {
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
};

export default Question8;
