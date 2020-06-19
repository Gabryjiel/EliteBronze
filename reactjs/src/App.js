import React from 'react';

import Header from "./components/Header";

import TournamentList from "./components/Tournaments/TournamentList.js";

import "./css/App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = props => {

  return (
    <BrowserRouter>
      <Header />
      
      <div className="app_main">
        <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/tournaments" component={TournamentList} />
            <Route path="/stats"></Route>
            <Route path="/profile"></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;