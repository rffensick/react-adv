import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import { Button, Form }  from 'react-bootstrap';
import ErrorField from './ErrorField';

class SignInForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>Sign In</h2>
				<Form horizontal>
					<form onSubmit={ handleSubmit } >
						<div>
							<Field name='email' component={ ErrorField } />
						</div>

						<div>
							<Field name='password' component={ ErrorField } type='password' />
						</div>

						<div className="sbm">
							<Button bsStyle="primary" type="submit">
								Submit
							</Button>
						</div>
					</form>
				</Form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'auth'
})(SignInForm);