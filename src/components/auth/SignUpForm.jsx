import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'validator';
import Fields from './Fields';
import { Button, Form }  from 'react-bootstrap';

class SignUpForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>Sign Up</h2>
				<Form onSubmit={handleSubmit} horizontal>
					<div>
						<Field name='email' component={Fields} />
					</div>

					<div>
						<Field name='password' component={Fields} type='password' />
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