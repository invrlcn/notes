const jumpBtn = document.querySelector('#jump')

jumpBtn.onclick = function() {
  location.href = './demo.html'

  // 跳转(不刷新网页)
  history.pushState({name: "invrlcn"}, "", "/detail")
  // history.replaceState({name: "invrlcn"}, "", "/detail")
}