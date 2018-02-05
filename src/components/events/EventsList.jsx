import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAll, eventsListSelector} from '../../ducks/events';
import {moduleName} from '../../ducks/events';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

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
		const {loading} = this.props;
		return (
			<div>
				{loading && 
					<Segment>
						<Dimmer active inverted>
							<Loader size='large'>Loading</Loader>
						</Dimmer>

						<Image src='/assets/images/wireframe/image-text.png' />
					</Segment>
				}
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
	events: eventsListSelector(state),
	loading: state[moduleName].loading
}), {fetchAll})(EventsList);