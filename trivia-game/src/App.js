import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer/GameContainer'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <GameContainer />
    </div>
  );
}

export default App;
