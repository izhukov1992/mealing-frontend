import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/App';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

import { authReducer } from './reducers';

const store = createStore(
  combineReducers({
    auth: authReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  )
)

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