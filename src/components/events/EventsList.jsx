import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAll, eventsListSelector} from '../../ducks/events';

class EventsList extends Component {

	componentDidMount() {
		this.props.fetchAll();
	}

	getRow = (event) => {
		return (
			<tr key={event.uid} >
				<td>{event.title}</td>
				<td>{event.where}</td>
				<td>{event.month}</td>
			</tr>
		)
	}
	
	getRows = () => {
		return this.props.events.map(event => this.getRow(event));
	}

	render() {
		console.log(this.props.events);
		return (
			<div>
				<table>
					<tbody>
						{this.getRows()}
					</tbody>
				</table>
			</div>
		)
	}
}

export default connect(state => ({
	events: eventsListSelector(state)
}), {fetchAll})(EventsList);