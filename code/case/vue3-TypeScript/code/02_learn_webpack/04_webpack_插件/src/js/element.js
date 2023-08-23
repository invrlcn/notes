import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
import '../font/iconfont.css'
import imgs from '../img/zznh.png'
const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = 'Hello, World'

// 设置背景图片
const bgImg = document.createElement('div')
bgImg.className = 'image-bg'

// 设置img元素的src
const imgDiv = document.createElement('img')
imgDiv.src = imgs

// i元素
const iEl = document.createElement('i')
iEl.className = 'iconfont icon-ashbin'

const content = 'Hello, World'
console.log(content.length)

document.body.appendChild(divEl)
document.body.appendChild(bgImg)
document.body.appendChild(imgDiv)
document.body.appendChild(iEl)