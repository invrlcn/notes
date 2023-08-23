const obj = {
  name: 'bob',
  age: 18
}

// Object.defineProperty(obj, 'name', {
//   get: function() {
//     console.log("监听到obj对象的name属性被访问了")
//   },
//   set: function() {
//     console.log("监听到obj对象的name属性被设置了")
//   }
// })
// console.log(obj.name)
// obj.name = 'mary'

Object.keys(obj).forEach(i => {
  let value = obj[i]
  Object.defineProperty(obj, i, {
    get: function() {
      console.log(`监听到obj对象的${i}属性被访问了`)
      return value
    },
    set: function(newValue) {
      console.log(`监听到obj对象的${i}属性被设置了`)
      value = newValue
    }
  })
})
console.log(obj.name)
console.log(obj.age)
obj.name = 'mary'
obj.age = 20