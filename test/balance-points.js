const test = require('tape');
const balancePoints = require('../balance-points');

test('balancePoints', function (t) {
  'use strict';

  t.plan(9);

  t.deepEqual(balancePoints(), []);
  t.deepEqual(balancePoints({}), []);
  t.deepEqual(balancePoints([]), []);
  t.deepEqual(balancePoints([1]), [0]);
  t.deepEqual(balancePoints([1]), [0]);
  t.deepEqual(balancePoints([3, -2, 0, 4, 6, -5]), [3]);
  t.deepEqual(balancePoints([1, 0, 0, 1]), [1,2]);
  t.deepEqual(balancePoints([2, -1, 1, -1, 1]), [0]);
  t.deepEqual(balancePoints([-4, -7, 6, 2, 9, -3]), [4]);
});
