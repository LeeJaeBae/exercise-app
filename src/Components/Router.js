import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Exercise from "../Routes/Exercise";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/exercise/:id" component={Exercise} />
      </Switch>
    </>
  </Router>
);
