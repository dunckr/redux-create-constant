const { expect } = require('chai');

const { createConstant, isConstantType } = require('../src');

describe('createConstant', () => {
	describe('type and states', () => {
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
	describe(', getNamespace', () => {
		it('returns the namespace', () => {
			const apiConstants = createConstant('API', ['REQUEST', 'SUCCESS', 'ERROR']);
			expect(apiConstants(undefined, true)).to.eql('@@API');
		});
	});
});

describe('isConstantType', () => {
	describe('object: action', () => {
		describe('different constant type', () => {
			it('returns false', () => {
				const toggleConstant = createConstant('TOGGLE', ['SHOW', 'HIDE']);
				const apiConstant = createConstant('API', ['REQUEST', 'SUCCESS', 'ERROR']);
				const MODAL = toggleConstant('MODAL');
				const action = {
					type: MODAL.SHOW,
				};
				expect(isConstantType(action, apiConstant)).to.eql(false);
			});
		});
		describe('same constant type', () => {
			it('returns true', () => {
				const toggleConstant = createConstant('TOGGLE', ['SHOW', 'HIDE']);
				const MODAL = toggleConstant('MODAL');
				const action = {
					type: MODAL.SHOW,
				};
				expect(isConstantType(action, toggleConstant)).to.eql(true);
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
				expect(isConstantType(type, apiConstant)).to.eql(false);
			});
		});
		describe('same constant type', () => {
			it('returns true', () => {
				const toggleConstant = createConstant('TOGGLE', ['SHOW', 'HIDE']);
				const MODAL = toggleConstant('MODAL');
				const type = MODAL.SHOW;
				expect(isConstantType(type, toggleConstant)).to.eql(true);
			});
		});
	});
});
