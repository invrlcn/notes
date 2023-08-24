const store = require('./store')
const { changeNameAction, addAgeAction } = require('./store/actionCreators')

store.dispatch(changeNameAction('tom'))
console.log(store.getState())

store.dispatch(addAgeAction(100))
console.log(store.getState())
