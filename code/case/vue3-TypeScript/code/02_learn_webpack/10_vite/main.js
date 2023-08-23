import { createApp } from 'vue'
import {foo} from './src/js/foo'
import App from './src/vue/app.vue'
import mul from './src/ts/mul.ts'

import './src/css/style.less'
import './src/css/style.css'



const titleEl = document.createElement('div')
titleEl.className = 'title'
titleEl.innerHTML = 'Hello, Vite'
document.body.appendChild(titleEl)
console.log(foo(10, 20))
console.log(mul(40, 50))

createApp(App).mount('#app')