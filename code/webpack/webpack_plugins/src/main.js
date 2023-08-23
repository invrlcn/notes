import './assets/title.css'
import './assets/des.less'
import './assets/imgCLass.css'
import { createApp } from 'vue'
import app from './app/app'
import '@/hello/hello'

const msg = 'hello, webpack'
console.log(msg)

const sum = (m, n) => {
  console.log(m + n)
}
sum(10, 20)

const arr = [1, 2, 3]
arr.forEach(i => {
  console.log(i)
})

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

// 创建img元素
const imgEl = document.createElement('img')
imgEl.src = require('./imgs/35cc2f2bb8cef53c1cff36993557c4be.jpg')
imgEl.classList.add('img-class')
document.body.append(imgEl)

const boxEl = document.createElement('div')
boxEl.classList.add('img-class')
document.body.append(boxEl)

const App = new createApp(app)
App.mount('#app')
