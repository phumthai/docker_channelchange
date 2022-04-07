import React from "react";
import Tab from "./tab.js";
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/dates" />
      <Route exact path="/:page?" render={props => <Tab {...props} />} />
    </Switch>
  );
}