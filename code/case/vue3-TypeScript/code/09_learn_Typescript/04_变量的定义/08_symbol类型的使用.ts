const msg: symbol = Symbol('msg')
const title = Symbol('title')

const info = {
  [msg]: 'hello',
  massage: msg
}

console.log(msg, title, info.massage, info[msg])