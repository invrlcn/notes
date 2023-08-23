// 1.函数作为参数时，在参数中如何编写类型

function bar() {
}
type FnType = () => void

function foo(params: FnType) {
  params()
}

foo(bar)

// 2. 定义常量时, 编写函数类型
type AddFnType = (num1: number, num2: number) => void
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2
}
add(10, 20)

export {}