import React, { Component } from 'react'
import EventsList from '../events/EventsList';
import { Jumbotron, Grid } from 'react-bootstrap';

export default class EventsPage extends Component {
	render() {
		return (
			<Jumbotron>
				<Grid>
					<div>
						<EventsList />
					</div>
				</Grid>
			</Jumbotron>
		)
	}
}
