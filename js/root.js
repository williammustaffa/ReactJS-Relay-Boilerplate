import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import HomeView, * as home from './views/home/Home';

const routes = [
  <Redirect from="/" to={home.path()} />,
  <Route path={home.path()} component={HomeView} />,
];

// export const app = (
//   <Router
//     history={hashHistory}
//     routes={routes}
//     key={Date.now()}
//   />
// );

// testing hot module replacement
export const app = <div>asd 2</div>;
