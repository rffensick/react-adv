import React, { Component } from 'react';

export default class ErrorField extends Component {
	render() {
		const {input, type, meta: {error, touched} } = this.props;
		const errorText = touched && error && <div style={{color: 'red'}} >{error}</div>;
		return (
			<div>
				<label>{input.name.charAt(0).toUpperCase() + input.name.substr(1)}:</label>
				<input {...input} type={type} />
				{errorText}
			</div>
		);
	}
}
