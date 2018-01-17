import test from 'ava';
import fn from './src';

test('is function', t => {
	t.is(typeof fn, 'function');
});

test('should remove if exists', t => {
	const arr = [1, 2, 3];
	const value = 2;
	t.deepEqual(fn(arr, value), [1, 3]);
});

test('should add if does not exists', t => {
	const arr = [1, 2, 3];
	const value = 4;
	t.deepEqual(fn(arr, value), [1, 2, 3, 4]);
});

test('should check values with custom value checker', t => {
	const arr = [{v: 1}, {v: 2}, {v: 3}];
	const predicate = (a, b) => a.v === b.v;
	t.deepEqual(fn(arr, {v: 2}, predicate), [{v: 1}, {v: 3}]);
	t.deepEqual(fn(arr, {v: 4}, predicate), [{v: 1}, {v: 2}, {v: 3}, {v: 4}]);
});
