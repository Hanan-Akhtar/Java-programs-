import { useState } from "react";

const Concatinate = () => {
    const [list, setList]=useState('Hanan');
    const [list2, setList2]=useState('Akhtar');
    const [array, setArray]=useState([]);
   

    
    const Change = () => {
        const array2=[];
        for (let i = 0; i < list.length; i++) {
            array2.push(list[i])
            
        }
        for (let i = 0; i < list2.length; i++) {
            array2.push(list2[i])
            
        }
        setArray(array2);
    }
    return ( 
        <div>
            <h1>{list}</h1>
            <h1>{list2}</h1>
            <button onClick={Change}>Click here</button>
            <h1>{array}</h1>
        </div>
     );
    
    
}
 
export default Concatinate;