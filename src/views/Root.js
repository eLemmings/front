import React from "react";
import "./scss/index.scss";
import LoginView from "./LoginView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiaryView from "./DiaryView";
import RegisterView from "./RegisterView";

const Root = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route path="/diares" component={DiaryView} />
        <Route path="/register" component={RegisterView} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Root;
