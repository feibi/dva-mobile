import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Test from './routes/Test.js';

function RouterConfig({history}) {
  return (
    <Router history={ history }>
      <Route
        path='/'
        component={ IndexPage } />
      <Route
        path='/test'
        component={ Test } />
    </Router>
    );
}

export default RouterConfig;
