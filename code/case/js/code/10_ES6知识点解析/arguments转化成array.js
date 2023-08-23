function foo(num1, num2) {
  // 1. 遍历
  // var newArr = []
  // for(var i = 0; i < arguments.length; i++) {
  //   newArr.push(arguments[i] * 10)
  // }
  // console.log(newArr)

  // 2. Array.prototype.slice将arguments转化成array
  // var newArr2 = Array.prototype.slice.call(arguments)
  // console.log(newArr2)

    // var newArr3 = [].slice.call(arguments)
    // console.log(newArr3)

  // 3.ES6语法
  var newArray4 = Array.from(arguments)
  console.log(newArray4)
  
  var newArray5 = [...arguments]
  console.log(newArray5)
}
foo(10, 20, 30, 40, 50)
