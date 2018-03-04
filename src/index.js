function createConstant(type, states = []) {
	return (affix, __type) => {
		const namespace = `@@${type}`;
		if (__type) return namespace;
		return states.reduce((obj, value) => {
			const state = `${namespace}/${affix}_${value}`;
			return { ...obj, [value]: state };
		}, {});
	};
}

function isConstant(action, constantType) {
	const type = action.type || action;
	return type.indexOf(constantType(undefined, true)) !== -1;
}

module.exports = {
	createConstant,
	isConstant,
};
