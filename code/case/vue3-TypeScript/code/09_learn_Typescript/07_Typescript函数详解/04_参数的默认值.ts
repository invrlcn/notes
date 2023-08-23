// 第一个参数： 必传， 第二个参数： 有默认值， 第三个参数： 可选
function foo(x: number, y: number = 9, z?: number) {
  if(z) {
    console.log(x + y + z)
  }
  console.log(x + y)
}

foo(10)
foo(10, 20)
foo(10, 20, 30)

export {}