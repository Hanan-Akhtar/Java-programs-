import { useState } from "react";

const State = () => {
  const [list1, setList1]=useState([1,4,6]);
  const [list2, setList2]=useState([2,3,5]);
  const [list3, setList3]=useState([]);

  const merg = () => {
    const array=[];
    for (let i = 0; i < list1.length; i++) {
      array.push(list1[i]);
      
    }
    for (let i = 0; i < list2.length; i++) {
      array.push(list2[i]);
      
    }

    // array

    for (let   i= 0;   i< array.length;  i++) {
      
     for (let j=i+1; j<array.length;  j++) {
      if (array[i]>array[j]) {
        let temp =array[i];
        array[i]=array[j];
        array[j]=temp;
      }
     } 
    }
    setList3(array)
   
  }
  return(
    <div>
      <h1>{list1}</h1>
      <h1>{list2}</h1>
      <button onClick={merg}>Merg list</button>
      <h1>{list3}</h1>
    </div>
  )
   
}
 
export default State;