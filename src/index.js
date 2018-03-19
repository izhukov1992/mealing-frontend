import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './components/App';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

import * as reducers from './reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('content')
);
