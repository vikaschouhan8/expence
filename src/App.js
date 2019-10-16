import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from "react-router-dom"
// import GamesPage from './GamesPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>HTML Table</h2>

        <table>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Mode of money transfer</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>Amoiunt</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>Amoiunt</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
            <td>Amoiunt</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
            <td>Amoiunt</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
            <td>Amoiunt</td>
          </tr>
        </table>
        {/* <Link to="/games">Games</Link> */}
      </header>
      {/* <Switch> */}
      {/* <Route exact strict path="/games" component={GamesPage} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
