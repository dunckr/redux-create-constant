import { COUNTER, TOGGLE } from './actions';

export function counter(state = { counter: 0, isToggled: false, delay: 5 }, action) {
	switch (action.type) {
		case COUNTER.INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case COUNTER.DECREMENT:
			return { ...state, counter: state.counter - 1 };
		case TOGGLE:
			return { ...state, isToggled: !state.isToggled };
		default:
			return state;
	}
}

export default counter;
