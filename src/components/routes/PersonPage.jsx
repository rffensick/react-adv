import React, { Component } from 'react';
import NewPersonForm from '../people/NewPersonForm';
import { connect } from 'react-redux';
import {addPerson} from '../../ducks/people';

class PersonPage extends Component {
	render() {
		return (
			<div>
				<h2>Add new Person</h2>
				<NewPersonForm onSubmit={this.props.addPerson} />
			</div>
		);
	}
}

export default connect(null, { addPerson })(PersonPage);
