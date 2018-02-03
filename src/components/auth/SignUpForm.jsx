import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';
import ErrorField from './ErrorField';

class SignUpForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>Sign Up</h2>
				<form onSubmit={handleSubmit} >
					<div>
						<Field name='email' component={ErrorField} />
					</div>

					<div>
						<Field name='password' component={ErrorField} type='password' />
					</div>

					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		);
	}
}

const validate = ({email, password}) => {
	const errors = {};

	if (!email) errors.email = 'email can\'t be blank';
	else if (!validator.isEmail(email)) errors.email = 'Enter valid Email';

	if (!password) errors.password = 'password can\'t be blank';
	else if (password.length < 5) errors.password = 'password is to short';

	return errors;
};

export default reduxForm({
	form: 'auth',
	validate
})(SignUpForm);