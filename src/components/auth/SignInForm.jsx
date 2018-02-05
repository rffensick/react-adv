import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import { Button, Form }  from 'react-bootstrap';
import Fields from './Fields';
import { connect } from 'react-redux'
import { moduleName } from '../../ducks/auth';
import validator from 'validator';
import ErrorField from './ErrorField';

class SignInForm extends Component {
	render() {
		const { handleSubmit, globalError } = this.props;
		return (
			<div>
				<h2>Sign In</h2>
				{globalError && <ErrorField text={globalError.message} />}
				<Form onSubmit={handleSubmit} horizontal>
						<Field name='email' component={ Fields } />
						<Field name='password' component={ Fields } type='password' />
					<div className="sbm">
						<Button bsStyle="primary" type="submit">
							Submit
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}

const validate = ({ email, password }) => {
	const errors = {};

	if (!email) errors.email = 'E-mail can\'t be blank';
	else if (!validator.isEmail(email)) errors.email = 'Enter valid Email';

	if (!password) errors.password = 'Password can\'t be blank';
	else if (password.length < 5) errors.password = 'Password is too short';

	return errors;
};

SignInForm = connect(state => ({
	globalError: state[moduleName].error
}), null, null, { pure: false })(SignInForm);

export default reduxForm({
	form: 'signin',
	validate
})(SignInForm);