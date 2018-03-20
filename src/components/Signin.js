import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, TextField, Button } from 'react-md';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { signIn, signedIn } from '../actions';
/*
class Signin extends Component {
    constructor(props, context) {
        super(props, context);
    }
  componentWillMount() {
    console.log(this.props)
  }

  render() {
    console.log(this.props);
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
				  <div>{this.props.token}</div>
				  <Button flat primary swapTheming onClick={() => this.props.signedIn('dsfsdfsdf')}>Sign In</Button>
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
  token: state.token
})

const mapDispatchToProps = dispatch => ({
  signedIn: token => dispatch(signedIn(token))
})
*/

const mapStateToProps = state => ({
  user: state.user
})

class Signin extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(e) {
    const { dispatch } = this.props
    dispatch(signedIn('fffffffff'))
  }

  handleChange(e) {
    const { dispatch } = this.props
    dispatch(signedIn(e.target.value))
  }

	render() {
		console.dir(this.props);
		return (
			<div>
				<h1>Token</h1>
				<p>{ this.props.user.token }</p>
				<input onChange={this.handleChange} />
				<button onClick={this.handleClick}>+</button>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Signin)

/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)
*/
