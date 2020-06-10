/**
 * Add or remove item from array
 *
 * @param {Array} array Array with values needs to toggle
 * @param {*} value Value to toggle in `array`
 * @param {Function} [predicate] Function that compare each `array` item to equal `value`. Strict equality comparison by default
 * @return {Array} New array with or without `value`
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
function toggleInArray(array, value, predicate) {
	predicate = predicate || defaultPredicate;
	var includes = false;
	var result = [];

	for (var i = 0, length = array.length; i < length; i += 1) {
		var item = array[i];

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
 * @param {*} a Item of array
 * @param {*} b Value to toggle
 * @return {boolean} `true` if `a` and `b` are strict equals
 */
function defaultPredicate(a, b) {
	return a === b;
}

module.exports = toggleInArray;
