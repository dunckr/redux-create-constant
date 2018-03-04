# redux-create-constant


* want a way to build readme from jsdoc?

## Why?

Do you have constants littered throughout your codebase?

```js
const FETCH_USERS_STATUS_REQUEST = 'FETCH_USERS_STATUS_REQUEST';
const FETCH_USERS_STATUS_SUCCESS = 'FETCH_USERS_STATUS_SUCCESS';
const FETCH_USERS_STATUS_ERROR = 'FETCH_USERS_STATUS_ERROR';

const FETCH_ITEM_ADD_REQUEST = 'FETCH_ITEM_ADD_REQUEST';
const FETCH_ITEM_ADD_SUCCESS = 'FETCH_ITEM_ADD_SUCCESS';
const FETCH_ITEM_ADD_ERROR = 'FETCH_ITEM_ADD_ERROR';
...
```

Reduce boilerplate and keep your constants grouped and consistent:

```js
const apiConstants = constantine(['REQUEST', 'SUCCESS', 'ERROR']);

const FETCH_USERS_STATUS = apiConstants('FETCH_USERS_STATUS');

const FETCH_ITEM_ADD = apiConstants('FETCH_ITEM_ADD');
...
```

Apply middleware directly to specific constant types:

middleware
```js
is ApiConstant....
```


## Benefits

* consistent
* enforceable
* strings rather than symbols (easier to replicate)

strings are serializable, and by using Symbols you make recording and replaying harder than it needs to be

https://redux.js.org/recipes/reducing-boilerplate#actions

* apply middleware https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.mdto specific types of constants
https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md
