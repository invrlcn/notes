const { name, age, address } = require('./foo')
const bar = require('./bar.js')

const bar2 = require('./bar.js')

// require('./aaa')
// require('./bbb/main')

console.log('main')
console.log(name)
console.log(bar.age)
