var test = require('tape');
var balancePoints = require('../balance-points');

test('balancePoints', function (t) {
  'use strict';

  t.plan(8);

  t.deepEqual(balancePoints(), []);
  t.deepEqual(balancePoints({}), []);
  t.deepEqual(balancePoints([]), []);
  t.deepEqual(balancePoints([1]), [0]);
  t.deepEqual(balancePoints([1]), [0]);
  t.deepEqual(balancePoints([3, -2, 0, 4, 6, -5]), [3]);
  t.deepEqual(balancePoints([1, 0, 0, 1]), [1,2]);
  t.deepEqual(balancePoints([2, -1, 1, -1, 1]), [0]);
});
