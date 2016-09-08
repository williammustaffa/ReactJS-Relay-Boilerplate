import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, Redirect, IndexRedirect} from 'react-router';

import HomeView, * as home from './views/home/Home';
import App from './views/App';

 export function normalizePath(string) {
   return string.replace(/^\//, "");
 }
/**
 * Describes application routes
 *
 */
const routes = (
  <Router>
    <Route path="/" component={App}>
        <IndexRedirect to={normalizePath(home.path())}/>
        <Route
          path={normalizePath(home.path())}
          component={HomeView}
        />
    </Route>
  </Router>
);

// Render Application
ReactDOM.render(routes, document.getElementById('main'));
