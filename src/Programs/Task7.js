import React from "react";

const Task7 = () => {
    let str='025468';
    let result='';
    for (let i = 0; i < str.length; i++) {
        if (str[i]%2===0 && str[i+1]%2===0) {
            result+=str[i]+"-";
        }
        else{
            result+=str[i];
        }
            console.log(result);
        
        
    }
    return ( 
        <div>
            <h1>Dashes (__) between even number</h1>
            <h2>{str}</h2>
            <h2>{result}</h2>
        </div>
     );
}
 
export default Task7;