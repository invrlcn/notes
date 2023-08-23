// 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载

function add(n1: number, n2: number): number      // 没有函数体
function add(n1: string, n2: string): string      // 没有函数体

function add(n1: any, n2: any) {
  return n1 + n2
}

console.log(add(10, 20))
console.log(add('abc', 'asd'))

// 在函数的重载中, 实现函数是不能直接被调用的
// add({name: 'lcn'}, 'asd')

export {}

