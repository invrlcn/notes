class YrArray extends Array {
  firstItem() {
    return this[0]
  }
  lastItem() {
    return this[this.length - 1]
  }
}
var arr = new YrArray(10, 20, 30)
console.log(arr.firstItem())
console.log(arr.lastItem())