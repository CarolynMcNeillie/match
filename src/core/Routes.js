import React from "react";
import { Switch, Route } from "react-router-dom";

import { Board } from "./Board";
import { HelloWorldClass } from "./HelloWorldClass";

// High-level routes for the application
// Sub-routes should be nested within components
export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HelloWorldClass />
      <Board />
    </Route>{" "}
  </Switch>
);
