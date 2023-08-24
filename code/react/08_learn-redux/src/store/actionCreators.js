const { CHANGE_NAME, ADD_AGE } = require('./constants')

const changeNameAction = name => ({
  type: CHANGE_NAME,
  name
})

const addAgeAction = age => ({
  type: ADD_AGE,
  age
})


module.exports = {
  changeNameAction,
  addAgeAction
}
