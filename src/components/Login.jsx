import React, { useState, useEffect } from 'react';
import './Login.scss';

const AutoDismissAlert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="auto-dismiss-alert">
      <p>{message}</p>
    </div>
  );
};

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleStartClick = () => {
    if (name && email && profession) {
      onLogin();
    } else {
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-body">
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
        <button className="start" onClick={handleStartClick}>
          Start
        </button>
      </div>
      {showAlert && (
        <AutoDismissAlert message="Please fill in all fields." onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export default Login;
