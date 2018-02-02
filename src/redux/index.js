import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer =  applyMiddleware(thunk, logger);

const store = createStore(reducers, composeWithDevTools(enhancer));
window.store = store;

export default store;