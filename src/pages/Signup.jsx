import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [cinc, setCinc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="signUpContainer">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="contact">Contact:</label>
        <input
          type="tel"
          id="contact"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="cinc">CINC:</label>
        <input
          type="text"
          id="cinc"
          value={cinc}
          onChange={(event) => setCinc(event.target.value)}
        />
         <label htmlFor="password">Password</label>
        <input
          type="number"
          id="Password"
          value={cinc}
          onChange={(event) => setCinc(event.target.value)}
        />
        <button type="submit">Sign Up</button>
        <div style={{ textAlign: 'center', margin: '10px' }}>
        <label>Already Have Account.!!!</label>
        </div>
        <div style={{ textAlign: 'center', margin: '10px' }}>
        <button1 type="submit">Sign In</button1>
        </div>
        
      </form>
    </div>
  );
}

export default Signup;
