var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function() {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function() {
    return function() {
      console.log(this.name)
    }
  },
  foo4: function() {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2'}

person1.foo1();  //隐式调用 person1
person1.foo1.call(person2); // 显式调用优先隐式调用 person2
person1.foo2();  // 箭头函数this指向上层作用域  window
person1.foo2.call(person2);  // 同上  window
person1.foo3()();  // 独立调用 window
person1.foo3.call(person2)();  // 独立调用 window
person1.foo3().call(person2);  // 显式调用优先隐式调用 person2
person1.foo4()();   // 隐式调用 person1
person1.foo4.call(person2)();  // 显式调用优先隐式调用 person2
person1.foo4().call(person2);  // 找到上层作用域  person1