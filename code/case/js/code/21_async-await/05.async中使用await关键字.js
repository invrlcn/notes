// 1.await跟上表达式
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(222)
      reject(1111)
    }, 2000);
  })
}

async function foo() {
  const res = await requestData()
  console.log(res)
}

// 2.跟上其他值
// async function foo() {
//   const res1 = await 123
//   console.log(res1)
//   const res2= await {
//     then: function(resolve, reject) {
//       resolve('aaa')
//     }
//   }
//   console.log(res2)
//   const res3 = await new Promise((resolve, reject) => {
//     resolve('bbb')
//   })
//   console.log(res3)
// }

// 3.reject值

async function foo() {
  const res = await requestData()
  console.log(res)
}
foo().catch(err => {
  console.log(err)
})