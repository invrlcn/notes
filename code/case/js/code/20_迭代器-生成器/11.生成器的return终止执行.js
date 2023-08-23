function* foo(num) {
  console.log("函数开始执行~")

  const value1 = 10 + num
  console.log('第一段代码', value1)
    const n = yield value1

  console.log('n', n)
  const value2 = 20 + n
  console.log('第二段代码', value2)
  const m = yield value2
  console.log('m', m)
  const value3 = 30 + m
  console.log('第三段代码', value3)
  yield value3

  console.log('函数执行结束~')
}
const generator = foo(5)
console.log(generator.next())
console.log(generator.return(10))
console.log(generator.next(20))