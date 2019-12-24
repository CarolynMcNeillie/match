import React from "react";
import { Switch, Route } from "react-router-dom";

import { Board } from "./Board";
import { users } from "common/utils";

// High-level routes for the application
// Sub-routes should be nested within components
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Board />
      </Route>
      <Route exact path="/match">
        <Board />
      </Route>
      <Route path="/Simon">
        <Board player={users.simon} />
      </Route>
      <Route path="/match/Simon">
        <Board player={users.simon} />
      </Route>
      <Route path="/Nolan">
        <Board player={users.nolan} />
      </Route>
      <Route path="/match/Nolan">
        <Board player={users.nolan} />
      </Route>
      <Route path="/Connor">
        <Board player={users.connor} />
      </Route>
      <Route path="/match/Connor">
        <Board player={users.connor} />
      </Route>
    </Switch>
  );
};
