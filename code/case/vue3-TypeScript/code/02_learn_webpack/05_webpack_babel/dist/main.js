// require()引入
var {
  priceFormat
} = require('./js/format'); // import引入


import { sum } from './js/math';
import './js/element';
console.log(priceFormat());
console.log(sum(10, 20));
var name = 'lcn';
var age = 18;
var arrs = [1, 2, 3, 4];
arrs.forEach(function (item) {
  console.log(item + 1);
});