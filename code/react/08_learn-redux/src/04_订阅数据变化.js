const store = require('./store')
const { changeNameAction, addAgeAction } = require('./store/actionCreators')

const subscribe = store.subscribe(() => {
  console.log('数据发生变化:', store.getState())
})

store.dispatch(changeNameAction('tom'))
store.dispatch(addAgeAction(100))
subscribe()
