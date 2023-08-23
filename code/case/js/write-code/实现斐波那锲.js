// 1 1 2 3 5 8 13 21 34 55

// for循环
function fibonacci(n) {
  if (n === 1 || n === 2) return 1
  let n1 = 1
  let n2 = 1
  let res = 0
  for (let i = 3; i <= n; i++) {
    res = n1 + n2
    n1 = n2
    n2 = res
  }
  return res
}
console.log(fibonacci(9))

// 递归函数
function fibonacci(n) {
  if (n === 1 || n === 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(9))
