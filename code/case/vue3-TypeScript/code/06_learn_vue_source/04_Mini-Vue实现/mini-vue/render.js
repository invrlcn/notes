// h函数
const h = (tag, props, children) => {
  // vnode -> javascript对象 -> {}
  return {
    tag,
    props,
    children
  }
}

// mount函数
const mount = (vnode, container) => {
  // vnode -> element
  // 1.创建出真实的原生, 并且在vnode上保留el
  const el =  vnode.el = document.createElement(vnode.tag)

  // 2.处理props
  if(vnode.props) {
    for(const key in vnode.props) {   
      const value = vnode.props[key]

      if(key.startsWith('on')) {  // 对事件监听的判断
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

   // 3.处理children
   if(vnode.children) {
     if(typeof vnode.children === 'string') {
       el.textContent = vnode.children
     } else {
       vnode.children.forEach(item => {
         mount(item, el)
       })
     }
   }

   // 4.将el挂载到container上
   container.appendChild(el)
}

// patch函数
const patch = (n1, n2) => {
  if(n1.tag !== n2.tag) {
    const elParent = n1.el.parentElement
    elParent.removeChild(n1.el)
    mount(n2, elParent)
  } else {
    // 1.取出element对象, 并且在n2中进行保存
    const el = n2.el = n1.el

    // 2.处理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 2.1.获取所有的newProps添加到el
    for(const key in newProps) {
      const newValue = newProps[key]
      const oldValue = oldProps[key]
      if(newValue !== oldValue) {
        if(key.startsWith('on')) {  // 对事件监听的判断
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }
    // 2.2.删除旧的props
    for(const key in oldProps) {
      if(key.startsWith('on')) {  // 对事件监听的判断
        const value = oldProps[key]
        el.removeEventListener(key.slice(2).toLowerCase(), value)
      } 
      if(!(key in newProps)) {
        el.removeAttribute(key)
      }
    }

     //  3.处理children
  const oldChild = n1.children || []
  const newChild = n2.children || []
  if(typeof newChild === 'string') {  // 情况一: newChildren本身是一个string
    if(typeof oldChild === 'string') {
      if(newChild !== oldChild) {
        el.textContent = newChild
      }
    } else {
      el.innerHtML = newChild
    }
  } else {  // 情况二: newChildren本身是一个数组
    if(typeof oldChild === 'string') {
      el.innerHtML = ''
      newChild.forEach(item => {
        mount(item, el)
      })
    } else {
       
         // 1.前面有相同节点的原生进行patch操作
         const commonLength = Math.min(oldChild.length, newChild.length)
         for(let i = 0; i < commonLength; i++) {
           patch(oldChild[i], newChild[i])
         }
        // diff算法 => oldValue newValue 比较的过程
            /*
            有key: 首先会把两个数组相同的vnode一一对应起来，如果oldValue.length > newValue.length 那么删除多余的oldValue(unmount)
                   如果newValue.length > oldValue.length 那么最后就会添加新的值
            无key: 不会查找相同的属性，先会从头开始查找对应，找到对应不了的就会return, 
                   之后从末尾开始查找，找到之前对应不了的地方后在进行其他操作
            */ 
        // 2.newChild.length > oldChild.length
        // oldChildren: [v1, v2, v3]
        // newChildren: [v1, v5, v6, v8, v9]
         if(newChild.length > oldChild.length) {
             newChild.slice(oldChild.length).forEach(item => {
               mount(item, el)
             })
         }
         // 3.oldChild.length > newChild.length
        // oldChildren: [v1, v2, v3, v8, v9]
        // newChildren: [v1, v5, v6]
        if(oldChild.length > newChild.length) {
          oldChild.slice(newChild.length).forEach(item => {
            el.removeChild(item.el)
          })
        }
      }
    }
  }
}