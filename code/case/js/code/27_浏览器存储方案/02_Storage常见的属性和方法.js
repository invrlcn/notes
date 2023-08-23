// 1. setItem
localStorage.setItem("age", 19)
localStorage.setItem('address', '北极')

// 2. getItem
const res = localStorage.getItem('age')
console.log(res)

// 3.key()
const res1 = localStorage.key(2)
console.log(res1)

// 4.length
console.log(localStorage.length)
for(let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i)
  if(key === 'name') {
    console.log(localStorage.getItem(key))
  }
}

// 5.removeItem
localStorage.removeItem('address')
console.log(localStorage.length)

// 6.clear()
localStorage.clear()