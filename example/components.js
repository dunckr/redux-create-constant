import React from 'react';

export const Counter = ({ value, onIncrementClick }) => {
	return (
		<div>
			<span>{value}</span>
			<button onClick={onIncrementClick}>Increase</button>
		</div>
	);
};

export default Counter;
