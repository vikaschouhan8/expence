import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch } from "react-router-dom"
import GamesPage from './GamesPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/games">Games</Link>
      </header>
      {/* <Switch> */}
        <Route exact strict path="/games" component={GamesPage} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
