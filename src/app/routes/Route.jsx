'use strict';
/* eslint no-process-env:0 */

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
  // browserHistory
 }                              from 'react-router';
import { App }                  from '../containers';

import {
  Dashboard
}                               from '../views';

export const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Dashboard} />
        <Route path="/test" component={Dashboard} />
      </Route>
    </Router>
  );
};
