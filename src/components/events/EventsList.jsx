import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAll, eventsListSelector} from '../../ducks/events';
import {moduleName} from '../../ducks/events';
import { Dimmer, Loader, Image, Segment, Table, Header } from 'semantic-ui-react';

class EventsList extends Component {

	componentDidMount() {
		this.props.fetchAll();
	}

	getRow = (event) => {
		return (
			<Table.Row key={event.uid} >
				<Table.Cell>{event.title}</Table.Cell>
				<Table.Cell>{event.where}</Table.Cell>
				<Table.Cell>{event.month}</Table.Cell>
			</Table.Row>
		)
	};
	
	getRows = () => {
		return this.props.events.map(event => this.getRow(event));
	}

	render() {
		const {loading, loaded} = this.props;
		return (
			<div>
				{loading && 
					<Segment>
						<Dimmer active inverted>
							<Loader size='large'>Loading</Loader>
						</Dimmer>
					<Image src='/assets/images/wireframe/paragraph.png' />
					</Segment>
				}
				{loaded &&
					<Table celled padded >
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell singleLine>Name</Table.HeaderCell>
								<Table.HeaderCell>City</Table.HeaderCell>
								<Table.HeaderCell>Month</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{this.getRows()}
						</Table.Body>
					</Table>
				}
			</div>
		)
	}
}

export default connect(state => ({
	events: eventsListSelector(state),
	loading: state[moduleName].loading,
	loaded: state[moduleName].loaded
}), {fetchAll})(EventsList);