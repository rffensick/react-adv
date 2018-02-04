import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {moduleName} from '../../ducks/auth';
import UnAuthorized from './UnAuthorized';

class ProtectedRoute extends Component {

	renderProtected = (routerProps) => {
		const { component: ProtectedComponent, authorized } = this.props;
		return authorized ? <ProtectedComponent {...routerProps} /> : <UnAuthorized />
	}

	render() {
		const {component, ...rest} = this.props;
		return <Route {...rest} render={this.renderProtected} />
	}
}

export default connect(state => ({
	authorized: !!state[moduleName].user
}), null, null, {pure: false})(ProtectedRoute);