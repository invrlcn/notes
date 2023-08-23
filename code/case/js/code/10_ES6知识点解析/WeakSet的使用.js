// 和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构
// WeakSet 和Set的区别：
// 1.WeakSet中只能存放对象类型，不能存放基本数据类型；
// 2.WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收；
const wset = new WeakSet()
// wset.add(10)    // TypeError: Invalid value used in weak set
// WeakSet方法
// add(value)：添加某个元素，返回WeakSet对象本身；
wset.add({name: 'yr', age: 19, height: 1.99})
console.log(wset)
// delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型；
console.log(wset.delete('name'))
// has(value)：判断WeakSet中是否存在某个元素，返回boolean类型；
console.log(wset.has('age'))

// WeakSet不能遍历：
/*
  因为WeakSet只是对象的弱引用，如果我们遍历获取到其中的元素，
  那么有可能造成对象不能正常的销毁.所以存储到WeakSet中的对象是没办法获取的
*/