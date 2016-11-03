import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { app } from './root';
import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    { app }
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./root').app;

    render(
      <AppContainer>
         { NextApp }
      </AppContainer>,
      rootEl
    );
  });
}
