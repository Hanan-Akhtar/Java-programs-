import { useState } from "react";

const Question11 = () => {
    const [data , setData]=useState({
        name:''
    });
   const  handle= (e) => {
    const value=e.target.value;
    const Name=e.target.name;

    setData({... data,[Name]:value})
   }
   const  formHandle= (e) => {
    e.preventDefault();
    if (data.name.length===0) {
        alert("please enter the name")
        return;
    }if (data.name.length<=4) {
        alert("plz enter minimum 4 character")
        return;
    }
     else {
        alert("Name is submit")
    }
   }
    return ( 
        <>
        <form onSubmit={formHandle}>
            <input type="text" value={data.name} Name="name" onChange={handle} />
            <button type="submit">submit</button>
            </form></>
     );
}
 
export default Question11;