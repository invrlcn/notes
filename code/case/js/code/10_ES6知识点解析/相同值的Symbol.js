// 通过Symbol.for()来设置相同值的Symbol
// const s3 = Symbol('abc')
// const s4 = Symbol('abc')
// console.log(s3 === s4)
const s1 = Symbol.for('abc')
const s2 = Symbol.for('abc')
console.log(s1 === s2)

// Symbol.keyFor()获取值
console.log(Symbol.keyFor(s1))
console.log(Symbol.keyFor(s2))