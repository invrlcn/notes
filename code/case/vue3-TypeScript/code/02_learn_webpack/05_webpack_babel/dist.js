"use strict";

var _math = require("./js/math");

require("./js/element");

// require()引入
var _require = require('./js/format'),
    priceFormat = _require.priceFormat; // import引入


console.log(priceFormat());
console.log((0, _math.sum)(10, 20));
var name = 'lcn';
var age = 18;
var arrs = [1, 2, 3, 4];
arrs.forEach(function (item) {
  console.log(item + 1);
});
