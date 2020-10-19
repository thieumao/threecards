import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Game from "./containers/Game";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/old">
          <Home />
        </Route>
        <Route path="/">
          <Game />
        </Route>
      </Switch>
    </Router >
  );
};

export default App;
