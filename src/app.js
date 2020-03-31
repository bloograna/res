import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainPage from './main/MainPage';



const appHistory = createBrowserHistory();
ReactDOM.render(
  <HashRouter history={appHistory}>
    <Route name="home" path="/">
      <MainPage />
    </Route>
  </HashRouter>,
  document.querySelector('#app')
);

