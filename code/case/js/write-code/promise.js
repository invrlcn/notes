const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11)
    // reject(22)
    // resolve(
    //   new Promise((resolve, reject) => {
    //     // resolve(33)
    //     // reject(44)
    //   })
    // )
    // resolve({
    //   then: (resolve, reject) => {
    //     // resolve(55)
    //     // reject(66)
    //   }
    // })
  }, 1000)
})
// p.then(
//   res => {
//     console.log(res)
//   },
//   err => {
//     console.log(err)
//   }
// )
p.then(res => {
  console.log(res)
  return new Promise((resolve, reject) => {
    resolve('aa')
    // reject('bb')
  })
  // return {
  //   then: (resolve, reject) => {
  //     // resolve('cc')
  //     // reject('dd')
  //   }
  // }
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('abc')
  })

// Promise.resolve()
// const p = Promise.resolve('aa')
// const p = Promise.resolve(
//   new Promise((resolve, reject) => {
//     // resolve('ss')
//     reject('dd')
//   })
// )
// const p = Promise.resolve({
//   then: (resolve, reject) => {
//     // resolve('33')
//     reject('22')
//   }
// })

// Promise.reject()
// const p = Promise.reject('bb')
// p.then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(11)
    // reject(11)
  }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22)
    // reject(22)
  }, 500)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33)
    // reject(33)
  }, 3000)
})

// Promise.all()
// Promise.all([p1, p2, p3])
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Promise.allSettled()
// Promise.allSettled([p1, p2, p3])
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Promise.race()
// Promise.race([p1, p2, p3])
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Promise.any()
Promise.any([p1, p2, p3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
