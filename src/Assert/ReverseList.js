import React, { useState } from 'react';

export const ReverseList = () => {
    const [list, setList] = useState(['1', '2', '3', '4', '5']);
    const [reversedList, setReversedList] = useState([]);

  const handleReverse = () => {
    const newList = [];
    for (let i = list.length-1 ; i >= 0; i--) {
      newList.push(list[i]);
    }
    setReversedList(newList);
  };
    return ( 
        <div>
      <h2>Original List: {list.join(', ')}</h2>
      <button onClick={handleReverse}>Reverse List</button>
      <h2>Reversed List: {reversedList.join(', ')}</h2>
    </div>
     );
}




//////////////////////////////////////////////////





    
  
