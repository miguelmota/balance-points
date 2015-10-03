(function(root) {
  'use strict';

  function balancePoints(array) {
    if (!Array.isArray(array)) {
      return [];
    }

    var balancePoints = [];
    var beforeSum = 0;
    var afterSum = 0;

    for (var i = 0; i < array.length; i++) {
      if (i > 0) {
        beforeSum += array[i-1];
      }

      if (i <= array.length) {
        afterSum = array.slice(i+1, array.length).reduce(function(a, v) {
          return a + v;
        }, 0);
      }

      if (beforeSum === afterSum) {
        balancePoints.push(i);
      }
    }

    return balancePoints;
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
