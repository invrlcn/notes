function plant(name, age, address) {
  var p = new Object()
  p.name = name
  p.age = age
  p.address = address
  p.eating = function() {
    console.log(this.name + '在吃饭' )
  }
  p.runing = function() {
    console.log(this.address + '在中国')
  }
  return p
}
var p1 = plant('zs', 18, '北京')
var p2 = plant('ls', 30, '上海')
console.log(p1)
console.log(p1.eating())
console.log(p2)
console.log(p2.runing())
console.log(p1)
console.log(typeof p1)
