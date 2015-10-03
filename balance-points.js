(function(root) {
  'use strict';

  function sum(a, b) {
    return a + b;
  }

  function balancePoints(array) {
    if (!Array.isArray(array)) {
      return [];
    }

    var totalSum = array.reduce(sum, 0);
    var leftSum = 0;

    return array.reduce(function(points, current, i) {
      if (i > 0) {
        leftSum += array[i-1];
      }

      var rightSum = totalSum - leftSum - current;

      if (leftSum === rightSum) {
        points.push(i);
      }

      return points;
    }, []);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = balancePoints;
    }
    exports.balancePoints = balancePoints;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return balancePoints;
    });
  } else {
    root.balancePoints = balancePoints;
  }

})(this);
