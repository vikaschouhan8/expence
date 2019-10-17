import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from "react-router-dom"
import ExpenseTable from './components/ExpenseTable';
// import GamesPage from './GamesPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>HTML Table</h2>

        <ExpenseTable />
        {/* <Link to="/games">Games</Link> */}
      </header>
      {/* <Switch> */}
      {/* <Route exact strict path="/games" component={GamesPage} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
