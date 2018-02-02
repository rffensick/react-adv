import React, { Component } from 'react';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import {Route, NavLink} from 'react-router-dom';

export default class AuthPage extends Component {

	handleSignIn = (values) => console.log(values);
	handleSignUp = (values) => console.log(values);

	render() {
		return (
			<div>
				AuthPage
				<br/>
				<NavLink to='/auth/signin' activeStyle={{fontWeight: 'bold'}} >Sign In</NavLink>
				<br/>
				<NavLink to='/auth/signup' activeStyle={{fontWeight: 'bold'}} >Sign Up</NavLink>
				<Route path='/auth/signin' render={() => <SignInForm onSubmit={this.handleSignIn} ></SignInForm> } />
				<Route path='/auth/signup' render={() => <SignUpForm onSubmit={this.handleSignUp} ></SignUpForm>} />
			</div>
		);
	}
}
