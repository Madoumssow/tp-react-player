// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <h1>Liste des joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
