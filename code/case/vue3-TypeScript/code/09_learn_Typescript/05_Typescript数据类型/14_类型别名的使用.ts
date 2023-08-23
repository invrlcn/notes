// type用于定义类型别名(type alias)

type point = string | number | object
function foo(msg: point) {
  console.log(msg)
}

foo('hello')
foo(10)
foo({ x: 10, y: 10 })

type pointType = {
  x: number,
  y: number,
  z: number
}

function bar(params: pointType) {
  console.log(params)
}
bar({x: 10, y: 20, z: 30})