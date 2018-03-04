import { FIRST } from './actions';

export function counter(state = { count: 0 }, action) {
	const count = state.count;
	switch (action.type) {
		case FIRST.INCREMENT:
			return { count: count + 1 };
		case FIRST.DECREMENT:
			return { count: count - 1 };
		default:
			return state;
	}
}

export default counter;
