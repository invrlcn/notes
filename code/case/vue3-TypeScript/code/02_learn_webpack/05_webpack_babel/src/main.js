// require()引入
const { priceFormat } = require('./js/format')
// import引入
import { sum } from './js/math'
import './js/element'
console.log(priceFormat())
console.log(sum(10, 20))


const name = 'lcn'
const age = 18
const arrs = [1, 2, 3, 4]
arrs.forEach(item => {
  console.log(item + 1)
});

