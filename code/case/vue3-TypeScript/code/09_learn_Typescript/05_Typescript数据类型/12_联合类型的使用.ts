function foo(msg: string | number | object) {
  console.log(msg)
}

foo(10)
foo('abc')
foo({ x: 10, y: 20 })

export {}