import { useState } from "react";

const Question13 = () => {
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [passwordMatch,setPasswordMatch]=useState('');
    const  handle= (e) => {
        e.preventDefault();
     if (password===confirmPassword) {
        setPasswordMatch(true);
        alert("Submit successfully")
     } else {
        setPasswordMatch(false);
        alert("password do not match")
     }
    }
    return (  
        <>
        <form onSubmit={handle}>
            <h2>Password</h2>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <h2>Confirm Password</h2>
            <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
            {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>}
            <button type="submit">Submit</button>
            </form></>
    );
}
 
export default Question13;