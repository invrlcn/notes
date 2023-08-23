var obj = {
  name: 'yr'
}
var obj1 = obj.__proto__ = {}
var obj2 = obj.__proto__.__proto__= {}
var obj3 = obj1.__proto__.__proto__= {}
console.log(Object.prototype)
console.log(obj.__proto__ === Object.prototype)  // null
// console.log(obj1.__proto__)
console.log(obj2 === obj3)
console.log(obj2.__proto__ ,  obj3.__proto__)