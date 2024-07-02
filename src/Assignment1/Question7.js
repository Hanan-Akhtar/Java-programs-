import React, { useState } from "react";

 const Question7 = () => {
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
};
export default Question7;