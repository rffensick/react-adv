import React, { Component } from 'react';
import NewPersonForm from '../people/NewPersonForm';
import { connect } from 'react-redux';
import {addPerson} from '../../ducks/people';
import { Jumbotron, Grid } from 'react-bootstrap';

class PersonPage extends Component {
	render() {
		return (
			<Jumbotron>
				<Grid>
				<div>
					<h2>Add a new person</h2>
					<br/>
					<NewPersonForm onSubmit={this.props.addPerson} />
				</div>
				</Grid>
			</Jumbotron>
		);
	}
}

export default connect(null, { addPerson })(PersonPage);
