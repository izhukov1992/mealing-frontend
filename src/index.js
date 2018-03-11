import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import App from './App';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>,
  document.getElementById('content')
);
