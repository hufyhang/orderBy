'use strict';

(function (definition) {
  if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
    module.exports = definition();
  }
  else {
    window.orderBy = definition();
  }
})(
function () {
  return function orderBy (target, by, decend) {
    // If `target` is not an target, throw type error.
    var type = Object.prototype.toString.call(target);
    if (type !== '[object Array]') {
      throw new TypeError('orderBy only takes array parameter. Found: ' + type);
    }

    // If `by` is not defined properly, throw type error.
    if (typeof by !== 'string') {
      throw new TypeError('orderBy expects to take a string parameter. Found: '
                          + typeof by);
    }

    decend = typeof decend === 'boolean' ? decend : false;

    // First, create a `by` mapping list.
    // Format: {byValue: originalIndex, ...}
    var mapping = {};
    var temp = [];
    target.forEach(function (item, index) {
      var byValue = item[by];
      mapping[item[by]] = index;

      // Push curent item to `temp`.
      temp.push(byValue);
    });

    // Now, sort `temp`.
    temp.sort();
    // If need `decend`, reverse `temp`.
    if (decend) {
      temp.reverse();
    }

    // Now, map `temp` back to original `target`.
    var result = [];
    temp.forEach(function (value) { // `value` refers to `byValue` in `mapping`.
      result.push(target[mapping[value]]);
    });

    return result;
  };
});
