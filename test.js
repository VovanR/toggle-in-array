const test = require('ava');
const fn = require('.');

test('is function', t => {
	t.is(typeof fn, 'function');
});

test('should remove if exists', t => {
	const array = [1, 2, 3];
	const value = 2;
	t.deepEqual(fn(array, value), [1, 3]);
});

test('should add if does not exists', t => {
	const array = [1, 2, 3];
	const value = 4;
	t.deepEqual(fn(array, value), [1, 2, 3, 4]);
});

test('should check values with custom value checker', t => {
	const array = [{v: 1}, {v: 2}, {v: 3}];
	const predicate = (a, b) => a.v === b.v;
	t.deepEqual(fn(array, {v: 2}, predicate), [{v: 1}, {v: 3}]);
	t.deepEqual(fn(array, {v: 4}, predicate), [{v: 1}, {v: 2}, {v: 3}, {v: 4}]);
});
