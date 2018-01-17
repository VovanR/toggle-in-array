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
	predicate = predicate || defaultPredicate;
	var includes = false;
	var result = [];

	for (var i = 0, length = arr.length; i < length; i += 1) {
		var item = arr[i];

		if (predicate(item, value)) {
			includes = true;
			continue;
		}

		result.push(item);
	}

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
