import React from 'react';

export const Counter = ({ value, onIncrementClick, onDecrementClick }) => (
	<section>
		<button onClick={onDecrementClick}>+ Decrease</button>
		<h1>{value}</h1>
		<button onClick={onIncrementClick}>+ Increase</button>
	</section>
);

export const Toggle = ({ value, delay, onClick }) => (
	<section>
		<p>{value ? `Deplayed by ${delay} seconds` : 'Instant'}</p>
		<button onClick={onClick}>Toggle</button>
	</section>
);

export default Counter;
