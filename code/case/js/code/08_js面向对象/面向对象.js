// 创建方式一

// var obj = new Object()
// obj.name = 'mary'
// obj.age = 18
// obj.foo = function() {
//   console.log(this.name + '正在吃')
// }
// console.log(Object.keys(obj))
// for(keys in obj) {
//   console.log(keys)
// }

// 创建方式二

// var obj = {
//   name: 'mary',
//   age: 18,
//   foo: function() {
//     console.log(this.name + '年龄是' + this.age)
//   }
// }
// console.log(obj.foo())
// console.log(Object.keys(obj))
// for(keys in obj) {
//   console.log(keys)
// }

// 属性描述符: Object.defineProperty() 里面的对象有两种类型
// 1.数据属性： value configurable(是否可以修改) enumerable（可枚举的） writable（可读写的）
// 1.存取属性： configurable enumerable get set

var obj = {
  name: 'bob',
  age: 17
}
// Object.defineProperty(obj, 'eat', {
//   value: 'banana',
//   writable: true,
//   configurable: true,
//   enumerable: true
// })
// obj.name = 'bar'
// obj.eat = 'apple'
// console.log(Object.values(obj))

Object.defineProperty(obj, 'eat', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.name
  },
  set: function(newValue) {
    this.name = newValue
  }
})
 console.log(obj.eat)
