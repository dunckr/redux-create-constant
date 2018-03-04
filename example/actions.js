import { createConstant } from '../src';

export const counterConstants = createConstant('COUNTER', ['INCREMENT', 'DECREMENT']);

export const FIRST = counterConstants('FIRST');

export const incrementFirstCounter = { type: FIRST.INCREMENT };
