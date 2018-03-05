import React, { Component } from 'react';
import { connect } from 'react-redux';

import { decrementCounter, incrementCounter, toggleDelay } from './actions';
import { Counter, Toggle } from './components';

const mapStateToProps = ({ counter, delay, isToggled }) => ({
	counter,
	delay,
	isToggled,
});

const mapDispatchToProps = dispatch => ({
	onDecrementClick: () => dispatch(decrementCounter),
	onIncrementClick: () => dispatch(incrementCounter),
	onToggleClick: () => dispatch(toggleDelay),
});

const App = ({ counter, delay, isToggled, onToggleClick, onIncrementClick, onDecrementClick }) => {
	return (
		<div>
			<Counter value={counter} onIncrementClick={onIncrementClick} onDecrementClick={onDecrementClick} />
			<Toggle value={isToggled} delay={delay} onClick={onToggleClick} />
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
