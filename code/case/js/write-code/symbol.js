const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2) // false

const s3 = Symbol.for('abc')  // description
const s4 = Symbol.for('abc')
console.log(s3 === s4)
const res = Symbol.keyFor(s3)
console.log(res)
