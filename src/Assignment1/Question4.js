import React, { useState } from 'react';

const Question4 = () => {
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

export default Question4;

