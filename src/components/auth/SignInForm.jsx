import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import { Button, Form }  from 'react-bootstrap';
import Fields from './Fields';

class SignInForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>Sign In</h2>
				<Form onSubmit={handleSubmit} horizontal>
					<div>
						<Field name='email' component={ Fields } />
					</div>

					<div>
						<Field name='password' component={ Fields } type='password' />
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

export default reduxForm({
	form: 'auth'
})(SignInForm);