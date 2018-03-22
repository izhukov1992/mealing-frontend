import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { NavigationDrawer, FontIcon } from 'react-md';
import { connect } from 'react-redux';

import { signOut } from '../actions';

// Sadly the active prop on Link and IndexLink won't work correctly since
// they rely on context for updates and react-md uses PureComponent behind
// the scenes so the context updates don't happen.
function isActive(to, path) {
  return to === path;
}

class App extends Component {
  render() {
    const {
      location: { pathname },
      children
    } = this.props;

    return (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
        navItems={[{
          component: IndexLink,
          to: '/',
          active: isActive('/', pathname),
          primaryText: 'Home',
          leftIcon: <FontIcon>home</FontIcon>,
        }, {
          component: Link,
          to: '/signin',
          active: isActive('/signin', pathname),
          primaryText: 'Sign in',
          leftIcon: <FontIcon>vpn_key</FontIcon>,
        }, {
          component: Link,
          to: '/signup',
          active: isActive('/signup', pathname),
          primaryText: 'Sign up',
          leftIcon: <FontIcon>person_add</FontIcon>,
        }, {
          component: Link,
          to: '/signout',
          primaryText: 'Sign out',
          leftIcon: <FontIcon>exit_to_app</FontIcon>,
          onClick: () => { this.props.dispatch(signOut()) }
        }]}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarTitle="Hello, World!"
      >
        {children ? React.cloneElement(children, { key: pathname }) : null}
      </NavigationDrawer>
    );
  }
}

export default connect()(App)