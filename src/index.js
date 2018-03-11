/**
 * Create a constant type
 * @param {string} type
 * @param {array} states
 */
export const createConstant = (type, states = []) => (affix, getNamespace) => {
	const namespace = `@@${type}`;
	if (getNamespace) return namespace;
	return states.reduce((obj, value) => {
		const state = `${namespace}/${affix}_${value}`;
		return { ...obj, [value]: state };
	}, {});
};

/**
 * Check if action or string matches a constant type
 * @param {(action|string)} value
 * @param {constantType} constantType
 */
export const isConstantType = (value, constantType) => {
	const namespace = constantType(undefined, true);
	const type = value.type || value;
	return type.substr(0, namespace.length) === namespace;
};
