// ES11，Nullish Coalescing Operator增加了空值合并操作符
// 应用场景
const msg = ''
const res1 = msg || '默认值'   // 当值为0或''的时候返回的也是默认值,不符合需求
const res2 = msg ?? '默认值'
console.log(res1)
console.log(res2)