// dashboard-mfe/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Dashboard from '../src/App';
import Root from './root.component';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return null; // Customize error boundary if necessary
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

