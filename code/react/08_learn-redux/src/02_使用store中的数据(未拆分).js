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
console.log(store.getState())

// 6. 修改store中的数据: 必须action
// store.dispatch(action1)
// console.log(store.getState())   // { name: 'marry', age: 30 }

// store.dispatch(action2)
// console.log(store.getState())   // { name: 'marry', age: 50 }

// 7. 订阅数据变化
const subscribe = store.subscribe(() => {
  console.log('订阅数据的变化:', store.getState())
})
store.dispatch(action1)
store.dispatch(action2)
subscribe()

/**
 * redux代码优化:
 *  1.将派发的action生成过程放到一个actionCreators函数中
 *  2.将定义的所有actionCreators的函数, 放到一个独立的文件中: actionCreators.js
 *  3.actionCreators和reducer函数中使用字符串常量是一致的, 所以将常量抽取到一个独立constants的文件中
 *  4.将reducer和默认值(initialState)放到一个独立的reducer.js文件中, 而不是在index.js
 */
