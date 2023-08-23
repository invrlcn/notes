// Symbol 作为属性名
const s1 = Symbol('abc')
const s2 = Symbol('cba')
const obj = {}

// 方式一：属性名赋值
obj[s1] = 'abc'
obj[s2] = 'cba'
// console.log(obj[s1])
console.log(obj[s2])

// 方拾二：Object.defineProperty
Object.defineProperty(obj, s1, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 'abc'
})
console.log(obj[s1])

// 方式三：字面量直接使用
const info = {
  [s1]: 'abc',
  [s2]: 'cba'
}
console.log(info[s1])
console.log(info[s2])