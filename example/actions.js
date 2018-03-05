import { createConstant } from '../src';

export const counterConstants = createConstant('COUNTER', ['INCREMENT', 'DECREMENT']);
export const COUNTER = counterConstants('COUNTER');
export const incrementCounter = { type: COUNTER.INCREMENT };
export const decrementCounter = { type: COUNTER.DECREMENT };

export const TOGGLE = 'TOGGLE';
export const toggleDelay = { type: TOGGLE };
