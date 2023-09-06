import './App.scss';
import React, { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const [showBody, setShowBody] = useState(false);

  const handleLogin = () => {
    setShowBody(true);
  };

  return (
    <div className="App">
      <Header />
      {showBody ? (
        <Body />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
