// !!操作符：
// 将一个其他类型转换成boolean类型
let msg: string = 'hello'
console.log(!!msg)

// ?? 操作符:
// 空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，
// 否则返回左侧操作数

// 和 || 的区别： 当值为空字符串或者0的时候，|| 会返回默认值， ?? 会返回空字符串或者0

const str = ''

const res = str ?? 'default'
console.log(res)