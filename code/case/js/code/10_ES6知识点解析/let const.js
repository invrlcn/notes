// const name = 'mary'
// name = 'tom'
// console.log(name)  // TypeError: Assignment to constant variable.

// 如果const 声明引用类型 改变对象里面的属性是可以访问到的
const obj = {
  name: 'mary'
}
obj.name = 'tom'
console.log(obj.name)

// 块级作用域应用场景

// var 制作另一个函数形成作用域
var btn = document.getElementsByClassName('btn')
for(var i = 0; i < btn.length; i++) {
  (function(n) {
    btn[i].onclick = function() {
      console.log('执行了第' + n + '个按钮')
    }
  })(i)
}

// let/const
for(let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    console.log('执行了第' + i + '个按钮')
  }
}
  