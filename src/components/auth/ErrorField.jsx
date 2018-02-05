import React, { Component } from 'react'
import { Message } from 'semantic-ui-react';

export default class ErrorField extends Component {
	render() {
		return (
			<Message negative>
				<Message.Header>Oops!</Message.Header>
				<p>{this.props.text}</p>
			</Message>
		)
	}
}
