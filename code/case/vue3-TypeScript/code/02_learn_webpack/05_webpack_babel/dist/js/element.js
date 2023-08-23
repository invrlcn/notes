import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
import '../font/iconfont.css';
import imgs from '../img/zznh.png';
var divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'Hello, World'; // 设置背景图片

var bgImg = document.createElement('div');
bgImg.className = 'image-bg'; // 设置img元素的src

var imgDiv = document.createElement('img');
imgDiv.src = imgs; // i元素

var iEl = document.createElement('i');
iEl.className = 'iconfont icon-ashbin';
var content = 'Hello, World';
console.log(content.length);
document.body.appendChild(divEl);
document.body.appendChild(bgImg);
document.body.appendChild(imgDiv);
document.body.appendChild(iEl);