import React, { Component } from 'react';
import {Grid, Cell, Card, CardText, TextField, Button } from 'react-md';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'

import * as actions from '../actions';

class Signin extends Component {
  render() {
    return (
    <Grid>
      <Cell desktopsize={4} desktopOffset={4} tabletsize={6} tabletOffset={2} phonesize={12}>
	<Card>
	  <CardText>
             <form name="form">
		<div>
		  <TextField
			id="floating-login"
			label="Enter your login"
                        name="login"
		  />
		</div>
		<div>
		  <TextField
			id="floating-password"
			label="Enter your password"
                        name="password"
			type="password"
		  />
		</div>
		<div>
		  <Button flat primary swapTheming>Sign In</Button>
		</div>
             </form>
	  </CardText>
	</Card>
      </Cell>
    </Grid>
    );
  }
}

function mapStateToProps(state) {  
  return {
    token: state.token
  }
}

function mapDispatchToProps(dispatch) {  
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, actions)(Signin)
