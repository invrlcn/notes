function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number ) {
  return fn(n1, n2)
}

const res1 = calc(10, 20, function(a1, a2) {
  return a1 + a2
})
const res2 = calc(10, 20, function(a1, a2) {
  return a1 * a2
})
console.log(res1, res2)