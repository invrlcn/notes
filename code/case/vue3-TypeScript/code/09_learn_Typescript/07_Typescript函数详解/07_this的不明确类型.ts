type ThisType = { name: string }
function eating(this: ThisType, msg: string) {
  console.log(this.name + 'eating', msg)
}

const info = {
  name: 'bob',
  eating: eating
}

// 隐式绑定
info.eating('banaba')

// 显示绑定
eating.call({ name: 'tom'}, 'apple')
eating.apply({ name: 'mary'}, ['strawberry'])
export {}