# redux-create-constant

## Installation

```sh
npm install redux-create-constant --save
```

## Why?

Do you have the same style of constants in your codebase?

```js
const FETCH_USERS_STATUS_REQUEST = 'FETCH_USERS_STATUS_REQUEST';
const FETCH_USERS_STATUS_SUCCESS = 'FETCH_USERS_STATUS_SUCCESS';
const FETCH_USERS_STATUS_ERROR = 'FETCH_USERS_STATUS_ERROR';

const FETCH_ITEM_ADD_REQUEST = 'FETCH_ITEM_ADD_REQUEST';
const FETCH_ITEM_ADD_SUCCESS = 'FETCH_ITEM_ADD_SUCCESS';
const FETCH_ITEM_ADD_ERROR = 'FETCH_ITEM_ADD_ERROR';
...
```

## Introducing redux-create-constant

Reduce boilerplate and keep your constants grouped, consistent and checkable:

```js
const apiConstants = constantine(['API', 'SUCCESS', 'ERROR']);

const FETCH_USERS_STATUS = apiConstants('FETCH_USERS_STATUS');
const FETCH_ITEM_ADD = apiConstants('FETCH_ITEM_ADD');

console.log(FETCH_USERS_STATUS.REQUEST); // @@API/FETCH_USERS_STATUS_REQUEST
console.log(FETCH_USERS_STATUS.SUCCESS); // @@API/FETCH_USERS_STATUS_SUCCESS
console.log(FETCH_USERS_STATUS.ERROR); // @@API/FETCH_USERS_STATUS_ERROR

console.log(FETCH_ITEM_ADD.REQUEST); // @@API/FETCH_ITEM_ADD_REQUEST
console.log(FETCH_ITEM_ADD.SUCCESS); // @@API/FETCH_ITEM_ADD_SUCCESS
console.log(FETCH_ITEM_ADD.ERROR); // @@API/FETCH_ITEM_ADD_ERROR
```

Apply middleware directly to specific constant types:

```js
import { isConstantType } from '../src';
import { apiConstants } from './actions';

export const authMiddleware = store => next => action => {
	if (!isConstantType(action, apiConstants)) return next(action);

	// Add headers etc
};
```

## Benefits

* Consistent constants
* Enforceable
* Reduces boilerplate
* Strings rather than symbols.

> [Strings are serializable, and by using Symbols you make recording and replaying harder than it needs to be](https://redux.js.org/recipes/reducing-boilerplate#actions)

* Apply [middleware](https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md) to specific types of constants easily
