import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../history';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history), thunk, logger);
	
const store = createStore(reducer, composeWithDevTools(enhancer));
window.store = store;

sagaMiddleware.run(saga);

export default store;