import React, { useState } from 'react'

const Tast1 = () => {
    const [list, setList]=useState([1,4,5,-78]);
    const [list2, setList2]=useState([]);
    const  Filter= () => {
        const array=[];
        for (let i = 0; i < list.length; i++) {
            if (list[i]>= 0) {
                array.push(list[i])
            }
           setList2(array);
            
        }
        
    }
    const handlelist = (e) => {
      setList(e.target.value.split(','));
    }
  return (
    <div>
      <h1>Filter out negative  number </h1>
        <input value={list} onChange={handlelist} />
        <button onClick={Filter}>Click</button>
        <h2>{list2}</h2>
    </div>
  )
}

export default Tast1;