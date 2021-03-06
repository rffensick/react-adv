import React, { Component } from 'react';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import {Route, NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import {signUp, signIn, moduleName} from '../../ducks/auth';
import { Grid, Row, Jumbotron, Col } from 'react-bootstrap';

class AuthPage extends Component {

	handleSignIn = ({email, password}) => this.props.signIn(email, password);
	handleSignUp = ({email, password}) => this.props.signUp(email, password);

	render() {
		const {loading, user} = this.props;
		if (loading) return <div>Loading...</div>
		return (
			<Jumbotron>
				<Grid>
					{user ? <div>Your in system</div> : 
						<div>
							<Col>
							<h1>AuthorizationPage</h1>
							</Col>
							<Row className="show-grid">
								<Col md={1} mdPull={11}>
								<NavLink className="sign" to='/auth/signin' activeStyle={{fontWeight: 'bold'}} >Sign In</NavLink>
								</Col>
								<Col md={1} mdPush={11}>
								<NavLink className="sign" to='/auth/signup' activeStyle={{fontWeight: 'bold'}} >Sign Up</NavLink>
								</Col>
							</Row>
							<Route path='/auth/signin' render={() => <SignInForm onSubmit={this.handleSignIn} ></SignInForm> } />
							<Route path='/auth/signup' render={() => <SignUpForm onSubmit={this.handleSignUp} ></SignUpForm>} />
						</div>
					}
				</Grid>	
			</Jumbotron>
		);
	}
}

export default connect(state => ({
	loading: state[moduleName].loading,
	user: !!state[moduleName].user
}), {signUp, signIn})(AuthPage);