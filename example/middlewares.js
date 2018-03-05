import { isConstantType } from '../src';
import { counterConstants } from './actions';

export const delayMiddleware = store => next => action => {
	if (!isConstantType(action, counterConstants)) return next(action);

	const { delay, isToggled } = store.getState();
	if (!isToggled) return next(action);
	const delayed = () => next(action);
	setTimeout(delayed, delay * 1000);
};

export const loggerMiddleware = store => next => action => {
	console.log(JSON.stringify(action));
	next(action);
};
