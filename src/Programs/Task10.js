import React from 'react';
const Task10 = () => {
  let array = 'tHE qUICK bROWN fOX';
  let result = '';

  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    if (char >= 'a' && char <= 'z') {
      result += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }

  return (
    <div className="container mt-5">
      
          <h1 className="text-uppercase">{array}</h1>
          <h2>{result}</h2>
        </div>
  );
};

export default Task10;
