import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, TextField, Button, SelectField  } from 'react-md';
import { connect } from 'react-redux';

import { register } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      pass: '',
      fname: '',
      lname: '',
      role: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, email, pass, fname, lname, role } = this.state;
    this.props.dispatch(register(username, email, pass, fname, lname, role));
  }

  handleChange(value, e) {
    this.setState({[e.target.name]: value});
  }

  handleSelect(value, index, e, obj) {
    this.setState({[obj.name]: value});
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
                    required={ true }
                    onChange={ this.handleChange }
                  />
                </div>
                <div>
                  <TextField
                    id="floating-email"
                    label="Enter your email"
                    name="email"
                    type="email"
                    required={ true }
                    onChange={ this.handleChange }
                  />
                </div>
                <div>
                  <TextField
                    id="floating-password"
                    label="Enter your password"
                    name="pass"
                    type="password"
                    required={ true }
                    onChange={ this.handleChange }
                  />
                </div>
                <div>
                  <TextField
                    id="floating-fname"
                    label="Enter your first name"
                    name="fname"
                    onChange={ this.handleChange }
                  />
                </div>
                <div>
                  <TextField
                    id="floating-lname"
                    label="Enter your last name"
                    name="lname"
                    onChange={ this.handleChange }
                  />
                </div>
                <div>
                  <SelectField
                    id="floating-role"
                    label="Choose your role"
                    name="role"
                    className="md-cell md-cell--12"
                    sameWidth
                    menuItems={ ['Client', 'Trainer'] }
                    required={ true }
                    onChange={ this.handleSelect }
                  />
                </div>
                <div>
                  <Button flat primary swapTheming type="submit">Sign Up</Button>
                </div>
                {this.props.auth.signup_errors &&
                  <div>
                    {this.props.auth.signup_errors.username &&
                      <p>login: { this.props.auth.signup_errors.username }</p>
                    }
                    {this.props.auth.signup_errors.email &&
                      <p>email: { this.props.auth.signup_errors.email }</p>
                    }
                    {this.props.auth.signup_errors.password &&
                      <p>password: { this.props.auth.signup_errors.password }</p>
                    }
                    {this.props.auth.signup_errors.first_name &&
                      <p>first name: { this.props.auth.signup_errors.first_name }</p>
                    }
                    {this.props.auth.signup_errors.last_name &&
                      <p>last name: { this.props.auth.signup_errors.last_name }</p>
                    }
                    {this.props.auth.signup_errors.account && this.props.auth.signup_errors.account.role &&
                      <p>role: { this.props.auth.signup_errors.account.role }</p>
                    }
                    {this.props.auth.signup_errors.non_field_errors &&
                      this.props.auth.signup_errors.non_field_errors.map(error => (
                        <p key={error}>{ error }</p>
                      ))
                    }
                </div>
                }
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

export default connect(mapStateToProps)(Signup)