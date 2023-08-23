import axios from 'axios'
import _ from 'lodash'         // 引用报错是因为lodash里面没有类型声明： declare .d.ts
require('string_score')

import { add, sub } from './utils/math'
import { Time, Price } from './utils/namespace'

console.log(add(10, 20))
console.log(sub(30, 10))

console.log(Time.format('abc'))
console.log(Price.format(10))

const arr = ['abc', 'nba', 'cba']
axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
  console.log(res)
})
const j = _.join(arr)
console.log(j)
const str = 'hello, world'
console.log(str.score('ow')) 

let lcnName = 'bob'
let lcnAge = 20
console.log(lcnName, lcnAge)
function lcnFoo() {
  console.log('tom')
}
lcnFoo()
const p = new Person('mary', 18)
console.log(p.name, p.age)

$.ajax({
  url: ''
})