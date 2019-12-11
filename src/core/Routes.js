import React from "react";
import { Switch, Route } from "react-router-dom";

import { Board } from "./Board";

// High-level routes for the application
// Sub-routes should be nested within components
export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Board />
    </Route>
  </Switch>
);
