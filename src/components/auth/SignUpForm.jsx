import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';
import ErrorField from './ErrorField';
import { Button, Form }  from 'react-bootstrap';

class SignUpForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>Sign Up</h2>
				<Form onSubmit={handleSubmit} horizontal>
					<div>
						<Field name='email' component={ErrorField} />
					</div>

					<div>
						<Field name='password' component={ErrorField} type='password' />
					</div>

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

const validate = ({email, password}) => {
	const errors = {};

	if (!email) errors.email = 'E-mail can\'t be blank';
	else if (!validator.isEmail(email)) errors.email = 'Enter valid Email';

	if (!password) errors.password = 'Password can\'t be blank';
	else if (password.length < 5) errors.password = 'Password is too short';

	return errors;
};

export default reduxForm({
	form: 'auth',
	validate
})(SignUpForm);