import './App.css';
import React, { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Room from './components/Room';



function App() {

  const [showRoom, setShowRoom] = useState(false);

  return (
    <div className="App">
      <Header />
      {showRoom && <Room />} {/* Conditionally render the Room component */}
      <Body />
    </div>
  );
}

export default App;
