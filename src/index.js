/**
 * Add or remove item from array
 *
 * @param {Array} arr
 * @param {*} value
 * @param {Function} [predicate]
 * @return {Array}
 *
 * @example
 * toggleInArray([1, 2, 3], 2)
 * //=> [1, 3]
 *
 * @example
 * toggleInArray([1, 2, 3], 4)
 * //=> [1, 2, 3, 4]
 *
 * @example
 * toggleInArray(
 *   [{v: 1}, {v: 2}, {v: 3}],
 *   {v: 2},
 *   (a, b) => a.v === b.v
 * )
 * //=> [{v: 1}, {v: 3}]
 */
function toggleInArray(arr, value, predicate) {
	let includes = false;
	predicate = predicate || defaultPredicate;

	const result = arr.reduce((acc, item) => {
		if (predicate(item, value)) {
			includes = true;
			return acc;
		}

		acc.push(item);
		return acc;
	}, []);

	if (!includes) {
		result.push(value);
	}

	return result;
}

/**
 * Strict equality comparison
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */
function defaultPredicate(a, b) {
	return a === b;
}

module.exports = toggleInArray;
