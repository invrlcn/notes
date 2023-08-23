(function foo() {
  if(moduleA.isFlag) {
    console.log('my name is', moduleB.name)
    console.log('my name is', moduleA.name)
  }
})()