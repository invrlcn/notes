/**
 * 通过联合类型有两个缺点:
 *  1.进行很多的逻辑判断(类型缩小)
 *  2.返回值的类型依然是不能确定
 */

function add(n1: number | string, n2: number | string) {
  if(typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2
  } else if(typeof n1 === 'string' && typeof n2 === 'string') {
    return n1 + n2
  }
}

console.log(add(10, 20))
console.log(add('abc', 'asd'))

export {}

