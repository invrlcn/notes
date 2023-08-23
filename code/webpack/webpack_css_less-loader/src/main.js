import './assets/title.css'
import './assets/des.less'

const msg = 'hello, webpack'
console.log(msg)

const sum = (m, n) => {
  console.log(m + n)
}
sum(10, 20)

// 创建h2元素
const h2El = document.createElement('h2')
h2El.textContent = '我是h2'
h2El.classList.add('title')
document.body.append(h2El)

// 创建p元素
const pEl = document.createElement('p')
pEl.textContent = '我是p元素'
pEl.classList.add('p-content')
document.body.append(pEl)
