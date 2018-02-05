import React, { Component } from 'react';
import {shallow, configure, mount} from 'enzyme';
import events from '../../mocks/conferences';
import { EventsList } from './EventsList';
import { Loader } from 'semantic-ui-react';
import Adapter from 'enzyme-adapter-react-16';
import {EventRecord} from '../../ducks/events';

configure({ adapter: new Adapter() });

const testEvents = events.map(event => new EventRecord({...event, uid: Math.random().toString()}))

it('should render loading', (done) =>  {
	const container = shallow(<EventsList fetchAll={done} loading />)
	expect(container.contains(<Loader/>))
})

it('should render loading', (done) => {
	const container = shallow(<EventsList fetchAll={done} events={testEvents} />)
	
	const rows = container.find('.test--event-list__row');
	expect(container.find('.test--event-list__row')).to.have.length(testEvents.length);
});

it('shoud request data', (done) => {
	mount(<EventsList events={[]} fetchAll={done} />)
})