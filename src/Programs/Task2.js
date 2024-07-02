import React, { useState } from 'react'

function Task2() {
    const [str, setStr]=useState("hello hanan")
        const  Remove= () => {
          let space='';
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
          space += str[i];
      }
      setStr(space);
    }
  }
  return (
    <div>
       <h1>Remove the spaces found in a string</h1><h2>{str}</h2>
      <input type="text" value={str} onChange={(e)=>setStr(e.target.value)}></input>
    <button onClick={Remove}>click me</button></div>
  )
}

export default Task2;