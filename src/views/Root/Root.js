import React from "react";
import "./index.scss";
import LoginView from "../LoginView/LoginView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiaryView from "../DiaryView/DiaryView";
import RegisterView from "../RegisterView/RegisterView";

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
