import React, { useState } from 'react';

const  EmailForm =() =>{
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

export default EmailForm;
