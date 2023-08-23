function sum(num: number, arrs: number[]) {
  let total = num
  for(const i of arrs) {
    total += i
  }
  return total
}
console.log(sum(10, [10, 20, 30]))