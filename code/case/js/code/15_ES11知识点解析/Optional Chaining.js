// 可选链是ES11中新增一个特性，主要作用是让我们的代码在进行null和undefined判断时更加清晰和简洁

const obj = {
  name: 'bob',
  // friend: {
  //   name: 'mary'
  // }
}
console.log('=====')
// console.log(obj.friend.name)  // mary

// 为了代码的正确性，我们通常会进行判断，以防报错
if(obj.friend && obj.friend.name) {
  // console.log(obj.friend.name)
}

// ES11  ?.
console.log(obj?.friend?.name)