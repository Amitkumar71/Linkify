import './App.css';
import React, { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';


function App() {

  const [showRoom, setShowRoom] = useState(false);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
