/*
  某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 padStart 和 padEnd 方法，分
  别是对字符串的首尾进行填充的
*/

const msg = 'hello world'
const newMsg1 = msg.padStart(13, '?')
const newMsg2 = msg.padEnd(13, 'x')
// const newMessage = msg.padStart(15, "*").padEnd(20, "-")
// console.log(newMessage)
// console.log(newMsg1)
// console.log(newMsg2)

// 身份证案例
const card = "321324234242342342341312"
// 取后四位
const cardFour = card.slice(-4)
const newCard = cardFour.padStart(card.length, '*')
console.log(newCard)