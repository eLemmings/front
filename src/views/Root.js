import React from "react";
import "./scss/index.scss";
import LoginView from "./LoginView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiaryView from "./DiaryView";
import RegisterView from "./RegisterView";
import ShareView from "./ShareView";

const Root = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route path="/diaries" component={DiaryView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/share/:code" component={ShareView} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Root;
