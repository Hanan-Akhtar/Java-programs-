import React, { useState } from 'react';

const FirstPage = ({ formData, onNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, email };
    onNext(newData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

const SecondPage = ({ formData }) => {
  return (
    <div>
      <h2>Second Page</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

const FormContainer = () => {
  const [formData, setFormData] = useState(null);

  const handleNext = (data) => {
    setFormData(data);
  };

  return (
    <div>
      {!formData ? (
        <FirstPage onNext={handleNext} />
      ) : (
        <SecondPage formData={formData} />
      )}
    </div>
  );
};

export default FormContainer;
