// 在早期的JavaScript中，我们不能正确的表示过大的数字：大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的。
// 那么ES11中，引入了新的数据类型BigInt，用于表示大的整数：BitInt的表示方法是在数值的后面加上n
const bigNum = Number.MAX_SAFE_INTEGER
// console.log(bigNum)
// console.log(bigNum + 1)
// console.log(bigNum + 2)
const bigInt = 900719925474099100n
console.log(bigInt + 10n)