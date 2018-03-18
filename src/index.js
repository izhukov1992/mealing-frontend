import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './components/App';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import * as reducers from './components';

const store = createStore(combineReducers(reduers))

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('content')
);
