define(function(require, module, exports) {
  const name = 'bob'
  const age = 18
  function sum(num1, num2) {
    return num1 + num2
  }

  return {
    name,
    age,
    sum
  }
});