import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, TextField, Button } from 'react-md';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { authenticate, signIn } from '../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
		username: '',
		pass: ''
	}

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    const { username, pass } = this.state;
    this.props.dispatch(authenticate(username, pass));
  }

  handleChange(value, e) {
    this.setState({[e.target.name]: value});
  }

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
				name="username"
                                onChange={ this.handleChange }
			  />
			</div>
			<div>
			  <TextField
				id="floating-password"
				label="Enter your password"
				name="pass"
				type="password"
                                onChange={ this.handleChange }
			  />
			</div>
			<div>
			  <p>{ this.props.user.token }</p>
			  <Button flat primary swapTheming onClick={ this.handleClick }>Sign In</Button>
			</div>
		 </form>
	  </CardText>
	</Card>
      </Cell>
    </Grid>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Signin)
