
// 和Map有什么区别
// 区别一：WeakMap的key只能使用对象，不接受其他的类型作为key
// 区别二：WeakMap的key对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么GC可以回收该对象；
// WeakMap常见的方法有四个：
// set(key, value)：在Map中添加key、value，并且返回整个Map对象；
// get(key)：根据key获取Map中的value； 
// has(key)：判断是否包括某一个key，返回Boolean类型；
// delete(key)：根据key删除一个键值对，返回Boolean类型；
// 注意：WeakMap也是不能遍历的 
// 因为没有forEach方法，也不支持通过for of的方式进行遍历；