import React from 'react';
import { useState } from "react";

export const Contact = () => {
    return ( 
        <><h1>Question11 to Question15</h1></>
     );
}
// question 11 strt here
export const Question11 = () => {
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
// question 11 end here

// question 12 strt here
export const  EmailForm =() =>{
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setErrorMessage(''); 
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
     
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      if (!emailRegex.test(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
      else{
        alert('Email is submit');
      }
      
      console.log('Valid email submitted:', email);
    };
  
    return (
    <div>
      <h1>Validate the 'Email' field </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
      
    );
  } 
   // question 12 end here

   // question 13 strt here
  export const Question13 = () => {
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
// question 13 end here

// question 14 strt here

export const Question14 = () => {
    const users = [
        { email: 'hanan@gmail.com', password: '1122' },
        { email: 'akhtar@gmail.com', password: '1122' },
      
    ];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const HandleLogin = (e) => {
        e.preventDefault()
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');

        } else {
            alert('Wrong email or password. Please try again.');
        }
    }
    return (
        <div>
            <h1></h1>
            <div >
                <form onSubmit={HandleLogin}>
                    <h2> Login to your Account</h2>
                    <input type="email" style={{ margin: 5 }} value={email} placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} required></input> <br />
                    <input type="password" style={{ margin: 5 }} value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required></input> <br />
                    <button className="btn btn-warning" type="submit" style={{ margin: 10 }}>submit</button>
                </form>
            </div>
            <hr />
        </div>
    );
}
// question 14 end here

// question 15 strt here

export const Question15 = () => {
    const [data,setData]=useState({
        name:"Hanan",
        last:"Akhtar",
        email:"hananakhtar@gmail.com",
        age:15,
        phone:"1111"
    });

    const  headling = (e) => {
     const value=e.target.value;
     const Name=e.target.name;

     setData({... data,[Name]:value})
    }
    const Handle = (e) => {
        e.preventDefault();
        if (data.name.length<=3) {
            alert('name must be written minimum 3 character')
            return;
        }
        if (data.last.length<=3) {
            alert('Last Name must be written minimum 3 character')
            return;
        }
        if (data.email.length<=3) {
            alert('name must be written minimum 3 character')
            return;
        }
        if (data.phone.length<=3) {
            alert('name must be written minimum 3 character')
            return;
        }
        if (data.age<18) {
            alert("age must be written minimum 18 years")
        }
        else{
            alert('form is submit')
        }
    }
    
  return (
    <div>
        <form onSubmit={Handle}>
            <input type='text' placeholder='First Name' Name="name" value={data.name} onChange={headling} required />
            <input type='text' placeholder='Last Name' Name="last" value={data.last} onChange={headling} required/>
            <input type='password' placeholder='Password'   required/>
            <input type='Number' placeholder='Phone Number' value={data.age} Name="age" onChange={headling} required/>
            <input type='email' placeholder='emil' value={data.email} Name="email"  onChange={headling} required/>
            <input type='Number' placeholder='Phone Number' value={data.phone} Name="phone" onChange={headling} required/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
// question 15 end here