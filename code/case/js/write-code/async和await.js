// console.log('start')
// const arr = ['abc', 'cba', 'nba', 'bba']
// async function generator(arr) {
//   for (const i of arr) {
//     const res = await i
//     console.log(res)
//     console.log(1111)
//   }
//   console.log(2222)
// }
// generator(arr)
// console.log('end')

const foo = async arg => {
  // const res = await arg

  // const res = await new Promise((resolve, reject) => {
  //   // resolve('bb')
  //   reject('bb')
  // })
  const res = await {
    then: (resolve, reject) => {
      // resolve('cc')
      reject('cc')
    }
  }
  return res
}
foo('aa')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
