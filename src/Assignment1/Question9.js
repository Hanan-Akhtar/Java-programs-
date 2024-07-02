import React, { useState } from 'react';

const Question9 = () => {
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

export default Question9;
