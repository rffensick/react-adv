import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import ProtectedRoute from './common/ProtectedRoute';
import PersonPage from './routes/PersonPage';
import EventsPage from './routes/EventsPage';
import { connect } from 'react-redux'
import { moduleName } from '../ducks/auth';
import { signOut } from '../ducks/auth';

class Root extends Component {
	render() {
		const {signedIn, signOut} = this.props;
		const btnSignOut = signedIn ? <button onClick={signOut} >Sign Out</button> : <Link to={'/auth/signin'} >Sign In</Link>;
		return (
			<div>
				{btnSignOut}
				<ProtectedRoute path='/admin' component={AdminPage} />
				<ProtectedRoute path='/people' component={PersonPage} />
				<ProtectedRoute path='/events' component={EventsPage} />
				<Route path='/auth' component={AuthPage} />
			</div>
		);
	}
}

export default connect(state => ({
	signedIn: !!state[moduleName].user
}), { signOut }, null, { pure: false })(Root);