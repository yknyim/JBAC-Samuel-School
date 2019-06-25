import React from 'react';
import logo from './logo.svg';
import './App.css';
import MemoryVerse from './component/MemoryVerse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Samuel School Verses</p>
        <MemoryVerse />
      </header>
    </div>
  );
}

export default App;
