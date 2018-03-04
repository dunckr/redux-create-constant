import { isConstant } from '../src';
import { counterConstants } from './actions';

export const delayMiddleware = store => next => action => {
	console.log('in middleware....', action);

	if (!isConstant(action, counterConstants)) return next(action);

	setTimeout(() => {
		console.log('delayed...');
		next(action);
	}, 5 * 1000);
};

export default delayMiddleware;
