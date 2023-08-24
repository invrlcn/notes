const { createStore } = require('redux')

// 1. 定义初始化数据
const initState = {
  name: 'tom',
  age: 30
}

// 2. 通过action修改数据
const action1 = { type: 'change-name', info: { name: 'marry' } }
const action2 = { type: 'change-age', info: { age: 50 } }

// 3. 使用reducer使state和action建立连接, 返回新的state对象
function reducer(state = initState, action) {
  switch (action.type) {
    case 'change-name':
      return { ...state, name: action.info.name }
    case 'change-age':
      return { ...state, age: action.info.age }
    default:
      return state
  }
}

// 4. 创建store
const store = createStore(reducer)

// 5. 使用store
// console.log(store.getState())


