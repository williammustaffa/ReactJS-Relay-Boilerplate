import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import HomeView, * as home from './views/home';
import GraphiQLView, * as graphiql from './views/graphiql';

// css
import 'graphiql/graphiql.css';

export const app = (
  <Router
    history={hashHistory}
    key={Date.now()}
  >
    <Redirect from="/" to={home.path()} />
    <Route path={home.path()} component={HomeView} />
    <Route path={graphiql.path()} component={GraphiQLView} />
  </Router>
);
