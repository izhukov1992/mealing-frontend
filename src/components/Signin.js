import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, TextField, Button } from 'react-md';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { authenticate } from '../actions';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      pass: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

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
              <form name="form" onSubmit={ this.handleSubmit }>
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
                  <Button flat primary swapTheming type="submit">Sign In</Button>
                </div>
                <div>
                  <p>{ this.props.auth.error }</p>
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
  auth: state.auth
})

export default connect(mapStateToProps)(Signin)