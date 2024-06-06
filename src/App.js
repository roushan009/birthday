// src/App.js
import React from 'react';
import AnniversaryCard from './components/AnniversaryCard';
// import CakeCutting from './components/CakeCutting';
import './App.css';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <AnniversaryCard />
      {/* <CakeCutting /> */}
    </div>
  );
}

export default App;
