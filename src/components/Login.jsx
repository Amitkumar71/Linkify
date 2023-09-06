import React, { useState } from 'react';
import './Login.scss';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');

  const handleStartClick = () => {
    // Check if all fields are filled before proceeding
    if (name && email && profession) {
      onLogin();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
     <div className='login-body'> 
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <button className="start" onClick={handleStartClick}>Start</button>
    </div>
    </div>
  );
};

export default Login;
