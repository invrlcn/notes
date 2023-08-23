const name = 'bob'
const age = 18
const address = '杭州市'

console.log('foo')

// exports.name = name
// exports.age = age
// exports.address = address

// module.exports.name = name

module.exports = {
  name,
  age,
  address
}

console.log(module.exports === exports)
