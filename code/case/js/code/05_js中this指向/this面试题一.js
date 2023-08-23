var name = 'window'

var person = {
  name: 'person',
  sayName: function() {
    console.log(this.name)
  }
}

function sayName() {
  var res = person.sayName;
  res();  // 独立调用  window
  person.sayName();  //隐式调用  person
  (person.sayName)();  // 同上  person
  (b = person.sayName)();  // 独立调用  window
}
sayName()