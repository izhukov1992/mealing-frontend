import React, { Component } from 'react';
import {Grid, Cell, Card, CardText, TextField, Button } from 'react-md';

export default class Signin extends Component {
  render() {
    return (
    <Grid>
      <Cell desktopsize={4} desktopOffset={4} tabletsize={6} tabletOffset={2} phonesize={12}>
		<Card>
		  <CardText>
			<div>
			  <TextField
				id="floating-login"
				label="Enter your login"
			  />
			</div>
			<div>
			  <TextField
				id="floating-password"
				label="Enter your password"
				type="password"
			  />
			</div>
			<div>
			  <Button flat primary swapTheming>Sign In</Button>
			</div>
		  </CardText>
		</Card>
      </Cell>
    </Grid>
    );
  }
}