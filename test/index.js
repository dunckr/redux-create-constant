const { expect } = require('chai');

const { createConstant, isConstant } = require('../src');

describe('createConstant', () => {
	describe('defaults', () => {
		it('generates unique constants', () => {
			const apiConstants = createConstant('API', ['REQUEST', 'SUCCESS', 'ERROR']);
			const FETCH_USERS_STATUS = apiConstants('FETCH_USERS_STATUS');
			const FETCH_ITEM_ADD = apiConstants('FETCH_ITEM_ADD');
			expect(FETCH_USERS_STATUS).to.eql({
				ERROR: '@@API/FETCH_USERS_STATUS_ERROR',
				REQUEST: '@@API/FETCH_USERS_STATUS_REQUEST',
				SUCCESS: '@@API/FETCH_USERS_STATUS_SUCCESS',
			});
			expect(FETCH_ITEM_ADD).to.eql({
				ERROR: '@@API/FETCH_ITEM_ADD_ERROR',
				REQUEST: '@@API/FETCH_ITEM_ADD_REQUEST',
				SUCCESS: '@@API/FETCH_ITEM_ADD_SUCCESS',
			});
		});
	});
});

describe('isConstant', () => {
	describe('object: action', () => {
		describe('different constant type', () => {
			it('returns false', () => {
				const toggleConstant = createConstant('TOGGLE', ['SHOW', 'HIDE']);
				const apiConstant = createConstant('API', ['REQUEST', 'SUCCESS', 'ERROR']);
				const MODAL = toggleConstant('MODAL');
				const action = {
					type: MODAL.SHOW,
				};
				expect(isConstant(action, apiConstant)).to.eql(false);
			});
		});
		describe('same constant type', () => {
			it('returns true', () => {
				const toggleConstant = createConstant('TOGGLE', ['SHOW', 'HIDE']);
				const MODAL = toggleConstant('MODAL');
				const action = {
					type: MODAL.SHOW,
				};
				expect(isConstant(action, toggleConstant)).to.eql(true);
			});
		});
	});
	describe('string: type', () => {
		describe('different constant type', () => {
			it('returns false', () => {
				const toggleConstant = createConstant('TOGGLE', ['SHOW', 'HIDE']);
				const apiConstant = createConstant('API', ['REQUEST', 'SUCCESS', 'ERROR']);
				const MODAL = toggleConstant('MODAL');
				const type = MODAL.SHOW;
				expect(isConstant(type, apiConstant)).to.eql(false);
			});
		});
		describe('same constant type', () => {
			it('returns true', () => {
				const toggleConstant = createConstant('TOGGLE', ['SHOW', 'HIDE']);
				const MODAL = toggleConstant('MODAL');
				const type = MODAL.SHOW;
				expect(isConstant(type, toggleConstant)).to.eql(true);
			});
		});
	});
});
