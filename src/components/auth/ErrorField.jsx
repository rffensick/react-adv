import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

export default class ErrorField extends Component {
	render() {
		const {input, type, meta: {error, touched} } = this.props;
		const errorText = touched && error && <div style={{color: 'red'}} >{error}</div>;
		return (
			<FormGroup>
				<label>{input.name.charAt(0).toUpperCase() + input.name.substr(1)}</label>
				<FormControl {...input} type={type} />
				{errorText}
			</FormGroup>
		);
	}
}
