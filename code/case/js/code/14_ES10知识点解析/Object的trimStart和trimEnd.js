/*
  去除一个字符串首尾的空格，我们可以通过trim方法，如果单独去除前面或者后面呢？
  ES10中给我们提供了trimStart和trimEnd
*/

const str = '  abcdefg  '
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())