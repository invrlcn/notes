# JS函数的this指向

## 一、为什么需要this？

### 1.1 this的好处

在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言中的this不太一样：

常见面向对象的编程语言中，比如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中

也就是你需要有一个类，类中的方法（特别是实例方法）中，this代表的是当前调用对象

但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义

编写一个obj的对象，有this和没有this的区别：

![](../imgs/javascript/%E6%97%A0this.png)

![](../imgs/javascript/%E6%9C%89this.png)

## 二、this的指向

### 2.1 全局下的指向

this在全局下的指向在浏览器中的测试就是指向window

![](../imgs/javascript/this%E6%8C%87%E5%90%91window.png)

但是，开发中很少直接在全局作用于下去使用this，通常都是在**函数中使用**

所有的函数在被调用时，都会创建一个执行上下文：

这个上下文中记录着函数的调用栈、AO对象等

this也是其中的一条记录

### 2.2 this其他指向及绑定规则

定义一个函数，我们采用三种不同的方式对它进行调用，它产生了三种不同的结果

![](../imgs\javascript\不同方式下的this调用.png)

由此我们可以得出几个结论：

1. 函数在调用时，JavaScript会默认给this绑定一个值
2. this的绑定和**定义的位置（编写的位置）没有关系**
3. this的绑定和**调用的位置和方式**有关系
4. this是在**运行时被调用的**

### 2.3  规则一：默认绑定

（独立函数调用）独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用

常见案例：

```javascript
// 案例一：
function foo() {
  console.log(this)
}

// 案例二：
function test1() {
    console.log(this)
    test2()
}
function test2() {
    console.log(this)
    test3()
}
function test3() {
    console.log(this)
}
test1()

// 案例三：
function foo(func) {
    func()
}
var obj = {
    name: 'lcn',
    bar: function() {
        console.log(this)
    }
}
foo(obj.bar)
```

### 2.4  规则二：隐式绑定

调用方式是通过某个对象进行调用的：就是它的调用位置中，是通过某个对象发起的函数调用

常见案例：

```javascript
// 通过对象调用
// 案例一
function foo() {
    console.log(this)   // obj对象
}
var obj = {
    name: 'lcn',
    foo: foo
}
obj.foo()

// 案例二
function foo() {
    console.log(this)   // obj2对象
}
var obj1 = {
    name: 'lcn',
    foo: foo
}
var obj2 = {
    name: 'bob',
    obj1: obj1
}
obj2.obj1.foo()

// 案例三
function foo() {
    console.log(this)  // bar
}
var obj1 = {
    name: 'lcn',
    foo: foo
}
// 将obj1的foo赋值给bar
var bar = obj1.foo;
bar()
```



### 2.5  规则三：显示绑定

隐式绑定有一个前提条件： 

必须在调用的对象内部有一个对函数的引用（比如一个属性）； 

 如果没有这样的引用，在进行调用时，会报找不到该函数的错误，正是通过这个引用，间接的将this绑定到了这个对象上

如果我们不希望在 **对象内部** 包含这个函数的引用，同时又希望在这个对象上进行强制调用，该怎么做呢？ 

JavaScript所有的函数都可以使用call和apply方法（这个和Prototype有关）

它们两个的区别： 

第一个参数是相同的，后面的参数，apply为数组，call为参数列表 

这两个函数的第一个参数都要求是一个对象，这个对象的作用是什么呢？就是给this准备的。 

在调用这个函数时，会将this绑定到这个传入的对象上。

因为上面的过程，我们明确的绑定了this指向的对象，所以称之为 **显示绑定**。

#### 2.5.1  通过call或者apply或者bind绑定this对象

显示绑定后，this就会明确的指向绑定的对象

```javascript
function foo() {
    console.log(this)
}
foo.call/apply(window)  // window
foo.call/apply({name: 'lcn'})  // {name: 'lcn'}
foo.call/apply(123) // Number对象 存放123
```

如果我们总是希望一个函数显示的绑定到一个对象上

```javascript
function foo() {
    console.log(this)
}
var obj = {
    name: 'lcn'
}
var bar = foo.bind(obj)
bar()  // obj对象
```

### 2.6 内置函数的绑定

有些时候，我们会调用一些JavaScript的内置函数，或者一些第三方库中的内置函数

这些内置函数会要求我们传入另外一个函数，我们自己并不会显示的调用这些函数，而且JavaScript内部或者第三方库内部会帮助我们执行，这些函数中的this又是如何绑定的呢？

#### 2.6.1 setTimeout、数组的forEach、div的点击

```javascript
setTimeout(function() {
    console.log(this)  // window
}, 1000)

var names = ['abc', 'cba', 'nba']
var obj = {name: 'lcn'}
    names.forEach(function(i) {
        console.log(this)  // 三次obj对象
    }, obj)

var box = document.querySelector('.box')
box.onclick = function() {
    console.log(this === box)  // box元素
}
```

forEach中this问题

![](../imgs/javascript/forEach%E4%B8%AD%E7%9A%84this.png)

### 2.7 规则四：new绑定

JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字

使用new关键字来调用函数时，会执行如下的操作：

1. 创建一个全新的对象
2. 这个对象会被执行prototype链接（这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性）
3. 构造函数的this会指向创建出来的新对象（this的绑定在这一步完成）
4. 如果函数没有其他返回对象，表达式会返回这个新对象

```javascript
function Person(name) {
    console.log(this)  // Person {}
    this.name = name  // Person {name: 'lcn'}
}
var p = new Person('lcn')
```

## 三、规则优先级

如果一个函数调用位置应用了多条规则，优先级谁更高呢？

**1.默认规则的优先级最低**

默认规则的优先级是最低的，因为存在其他规则时，就会通过其他规则的方式来绑定this

**2.显示绑定优先级高于隐式绑定**

**3.new绑定优先级高于隐式绑定**

**4.new绑定优先级高于bind**

new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高，new绑定可以和bind一起使用，new绑定优先级更高

## 四、this规则之外-忽略显示绑定

如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则：

```javascript
function foo() {
    console.log(this)
}
var obj = {
    name: 'lcn'
}
foo.call/apply(obj)  // obj
foo.call/apply(undefined) // window
foo.call/apply(null) // window
var bar = foo.bind(obj)  
bar()  // obj
var bar = foo.bind(null/undefined)  
bar()  // window
```

## 五、this规则之外-间接函数引用

创建一个函数的间接引用，这种情况使用默认绑定规则

赋值(obj2.foo = obj1.foo)的结果是foo函数，foo函数被间接调用，那么是默认绑定

```javascript
function foo() {
    console.log(this)
}
var obj1 = {
    name: 'lcn',
    foo: foo
}
var obj2 = {
    name: 'bob'
}
obj1.foo()  // obj1
(obj2.foo=obj1.foo)()  // window
```

## 六、this规则之外-ES6箭头函数

在ES6中新增一个非常好用的函数类型：箭头函数

箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this

下面案例中在setTimeout的回调函数中使用_this就代表了obj对象



```javascript
// ES6之前的写法
var obj = {
    data: [],
    getData: function() {
        var _this = this
        setTimeout(function() {
            // 模拟请求
			var res =  ['abc', 'acd', 'nba']
            _this.data.push(...res)
        }, 2000)
    }
}

// ES6使用箭头函数写法
const obj = {
    data: [],
    getData: function() {
        setTimeout(() => {
              // 模拟请求
            const res = ['abc', 'acd', 'nba']
            this.data.push(...res)
        }, 2000)
    }
}

// 下面这种情况会绑定到window
const obj = {
    data: [],
    getData: () => {
        setTimeout(() => {
              // 模拟请求
            const res = ['abc', 'acd', 'nba']
            this.data.push(...res)
        }, 2000)
    }
}
```

## 七、this面试题

### 7.1 案例一

```javascript
var name = 'window'
var person = {
    name: 'person',
    sayName: function() {
        console.log(this.name)
    }
}
function sayName() {
    var res = person.sayName
    res()  // window
    person.sayName()  // person
    (person.sayName)()  // person
    (b = person.sayName)()  // window
}
sayName()
```

### 7.2 案例二

```javascript
var name = 'window'
var person1 = {
    name: 'person1',
    foo1: function() {
        console.log(this.name)
    },
    foo2:() => console.log(this.name),
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
var person2 = {name: 'person2'}

person1.foo1()   // person1
person1.foo1.call(person2)   // person2

person1.foo2()  // window
person1.foo2.call(person2)  // window

person1.foo3()()  // window
person1.foo3.call(person2)()  // window
person1.foo3().call(person2)  // person2

person1.foo4()()  // person1
person1.foo4.call(person2)()  // person2
person1.foo4().call(person2)   // person1
```

### 7.3 案例三

```javascript
var name = 'window'
function Person(name) {
    this.name = name
    this.foo1 = function() {
        console.log(this.name)
    }
    this.foo2 = () => console.log(this.name)
    this.foo3 = function() {
        return function() {
            console.log(this.name)
        }
    }
    this.foo4 = function() {
        return () => {
            console.log(this.name)
        }
    }
}
var  person1 = new Person('person1')
var  person2 = new Person('person2')

person1.foo1()  // person1
person1.foo1.call(person2)  // person2

person1.foo2()  // person1
person1.foo2.call(person2)  // person1

person1.foo3()()  // window
person1.foo3.call(person2)()  // window
person1.foo3().call(person2)  // person2

person1.foo4()()  // person1
person1.foo4.call(person2)()  // person2
person1.foo4().call(person2)  // person1
```

### 7.4 案例四

```javascript
var name = 'window'
function Person(name) {
    this.name = name
    this.obj = {
        name: 'obj',
        foo1: function() {
            return function() {
                console.log(this.name)
            }
        },
        foo2: function() {
            return () => {
                console.log(this.name)
            }
        }
    }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()  // window
person1.obj.foo1.call(person2)()  // window
person1.obj.foo1().call(person2)  // person2

person1.obj.foo2()()  // obj
person1.obj.foo2.call(person2)()  // person2
person1.obj.foo2().call(person2)  // obj
```

