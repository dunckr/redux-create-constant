import React from 'react';
import { connect } from 'react-redux';

import { incrementFirstCounter } from './actions';
import { Counter } from './components';

const mapStateToProps = state => {
	return {
		value: state.count,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementClick: () => dispatch(incrementFirstCounter),
	};
};

export const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default App;
