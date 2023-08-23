function* foo() {
  console.log('函数开始执行')
  const value1 = 100
  console.log(value1)
  yield value1

  const value2 = 200
  console.log(value2)
  yield

  const value3 = 300
  console.log(value3)
  yield
  console.log('函数执行完毕')
}

const generator = foo()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())