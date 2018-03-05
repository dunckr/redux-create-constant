function createConstant(type, states = []) {
	return (affix, getNamespace) => {
		const namespace = `@@${type}`;
		if (getNamespace) return namespace;
		return states.reduce((obj, value) => {
			const state = `${namespace}/${affix}_${value}`;
			return { ...obj, [value]: state };
		}, {});
	};
}

function isConstantType(value, constantType) {
	const namespace = constantType(undefined, true);
	const type = value.type || value;
	return type.substr(0, namespace.length) === namespace;
}

module.exports = {
	createConstant,
	isConstantType,
};
