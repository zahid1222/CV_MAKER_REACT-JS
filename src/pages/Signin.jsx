import React, { useState } from 'react';
import './Signup.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [pass, setpassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="signUpContainer">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
       
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        
        />
         <label htmlFor="password">Password</label>
        <input
          type="number"
          id="Password"
          value={pass}
          onChange={(event) => setpassword(event.target.value)}
        />
        <button type="submit">Sign Up</button>
        
        
      </form>
    </div>
  );
}

export default Signin;
