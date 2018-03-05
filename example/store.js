import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

import { loggerMiddleware, delayMiddleware } from './middlewares';
import { counter } from './reducers';

const middlewares = [loggerMiddleware, delayMiddleware, thunkMiddleware];

export const store = createStore(
	counter,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	compose(applyMiddleware(...middlewares))
);

export default store;
