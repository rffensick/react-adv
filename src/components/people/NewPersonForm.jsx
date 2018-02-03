import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import Fields from '../auth/Fields';
import validator from 'validator';

class NewPersonForm extends Component {
	render() {
		const {handleSubmit} = this.props;
		return (
			<div>
				<Form onSubmit={handleSubmit} horizontal>
						<Field name='firstName' component={Fields} />
						<Field name='lastName' component={Fields} />
						<Field name='email' component={Fields} />
					<div className="sbm">
						<Button bsStyle="primary" type="submit">
							Submit
						</Button>
					</div>
				</Form>
			</div>
		)
	}
}

const validate = ({ firstName, email }) => {
	const errors = {};

	if (!email) errors.email = 'email can\'t be blank';
	else if (!validator.isEmail(email)) errors.email = 'Enter valid Email';

	if (!firstName) errors.firstName = 'Firstname can\'t be blank';
	else if (firstName.length < 3) errors.firstName = 'Firstname is to short';

	return errors;
};

export default reduxForm({
	form: 'person',
	validate
})(NewPersonForm);