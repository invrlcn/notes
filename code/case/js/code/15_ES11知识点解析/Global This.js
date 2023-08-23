/*
  在之前我们希望获取JavaScript环境的全局对象，不同的环境获取的方式是不一样的 
  比如在浏览器中可以通过this、window来获取；
  比如在Node中我们需要通过global来获取；
  那么在ES11中对获取全局对象进行了统一的规范：globalThis
*/
console.log(this)
console.log(globalThis)