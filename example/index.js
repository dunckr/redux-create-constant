import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import App from './containers';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
