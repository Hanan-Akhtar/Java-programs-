import { useState } from "react";

const Question1 = () => {
    const [value, setValue]=useState('hello');
    const [result, setResult]=useState('');
    const handle = () => {
      let newList = '';
      let character='';
      for (let i = value.length-1 ; i >= 0; i--) {
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
 return (  
  <>
  <h1>Click the button and reverse the list and change the case</h1>
  <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
  <button type="submit" onClick={handle}> Click me</button>
  <h2>{result}</h2>
  </>
        
    );
}
 
export default Question1;