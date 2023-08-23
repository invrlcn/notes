
const btns = document.querySelector('button')
btns.onclick = function() {
  localStorage.setItem('name', 'bob')
  sessionStorage.setItem('name', 'tom')
}