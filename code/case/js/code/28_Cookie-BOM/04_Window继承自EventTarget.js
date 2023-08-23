const clickDel = () => {
  console.log('window发生了点击')
}

console.log(window.addEventListener('click', clickDel))
console.log(window.removeEventListener('click', clickDel))

window.addEventListener('invrlcn', () => {
  console.log('监听到了invrlcn事件')
})
window.dispatchEvent(new Event('invrlcn'))