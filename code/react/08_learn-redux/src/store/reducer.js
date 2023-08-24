const { CHANGE_NAME, ADD_AGE } = require('./constants')

// 初始化的数据
const initState = {
  name: 'bob',
  age: 20,
  address: 'cn'
}

// 定义reducer函数: 纯函数
// 两个参数:
// 参数一: store中目前保存的state
// 参数二: 本次需要更新的action(dispatch传入的action)
// 返回值: 它的返回值会作为store之后存储的state
function reducer(state = initState, action) {
  // 有新数据进行更新的时候, 那么返回一个新的state

  // if判断
  // if (action.type === CHANGE_NAME) {
  //   return { ...state, name: action.name }
  // } else if (action.type === ADD_AGE) {
  //   return { ...state, age: state.age + action.age }
  // }
  // 没有新数据更新, 那么返回之前的state
  // return state

  // switch判断(常用)
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case ADD_AGE:
      return { ...state, age: state.age + action.age }
    default:
      return state
  }
}

module.exports = reducer
