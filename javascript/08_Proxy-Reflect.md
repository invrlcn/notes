# **Proxy-Reflect** **vue2-vue3响应式原理**

## 一、监听对象的操作

**先来看一个需求：有一个对象，我们希望监听这个对象中的属性被设置或获取的过程**

可以通过之前的属性描述符中的存取属性描述符来做到:

```javascript
const obj = {name: 'lcn', age: 18, height: 1.88}
Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
        get() {
            console.log(`获取到了${key}`)
            return value
        },
        set(newValue) {
            console.log(`设置了${key}`, newValue)
            value = newValue
        }
    })
})
obj.name = 'bob'
console.log(obj.age)
```

**但是这样做有什么缺点呢？**

首先，Object.defineProperty设计的初衷，不是为了去监听截止一个对象中所有的属性的，我们在定义某些属性的时候，初衷其实是定义普通的属性，但是后面我们强行将它变成了数据属性描述符。其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么Object.defineProperty是无能为力的。所以我们要知道，存储数据描述符设计的初衷并不是为了去监听一个完整的对象

## 二、Proxy的基本使用

在ES6中，新增了一个**Proxy类**，这个类从名字就可以看出来，是用于帮助我们创建一个**代理**的：

也就是说，如果我们希望监听一个对象的相关操作，那么我们可以**先创建一个代理对象（Proxy对象）**，之后对该对象的所有操作，都通过代理对象来完成，代理对象**可以监听我们想要对原对象进行哪些操作**

我们可以将上面的案例用Proxy来实现一次：

首先，我们需要**new Proxy对象**，并且**传入需要侦听的对象以及一个处理对象**，可以称之为handler 

const p = new Proxy(target, handler)

其次，我们之后的操作都是直接对**Proxy的操作**，而不是原有的对象，因为我们需要在handler里面进行侦听

```javascript
const obj = { name: 'lcn', age: 18, height: 1.88 }
const objProxy = new Proxy(obj, {
    get(target, property) {
        console.log('get捕获器', property)
        return target[property]
    },
    set(target, key, value) {
        console.log('set捕获器', value)
        target[key] = value
    }
})
objProxy.name = 'bob'
console.log(objProxy.age)
```

### 2.1 **Proxy的set和get捕获器**

如果我们想要侦听某些具体的操作，那么就可以在handler中添加对应的捕捉器（Trap），**set和get分别对应的是函数类型**

set函数有四个参数：

1. target：目标对象（侦听的对象）
2. property：将被设置的属性key
3. value：新属性值
4. receiver：调用的代理对象

get函数有三个参数：

1. target：目标对象（侦听的对象）
2. property：被获取的属性key
3. receiver：调用的代理对象

### 2.2 **Proxy所有捕获器**

**13个活捉器分别是做什么的呢？**

handler.getPrototypeOf()：Object.getPrototypeOf 方法的捕捉器

handler.setPrototypeOf()：Object.setPrototypeOf 方法的捕捉器

handler.isExtensible()：Object.isExtensible 方法的捕捉器

handler.preventExtensions()：Object.preventExtensions 方法的捕捉器

handler.getOwnPropertyDescriptor()：Object.getOwnPropertyDescriptor  方法的捕捉器

handler.defineProperty()：Object.defineProperty 方法的捕捉器

handler.ownKeys()：Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器

**handler.has()**：in 操作符的捕捉器

**handler.get()**：属性读取操作的捕捉器

**handler.set()**：属性设置操作的捕捉器

**handler.deleteProperty()**：delete 操作符的捕捉器

handler.apply()：函数调用操作的捕捉器

handler.construct()：new 操作符的捕捉器

### 2.3 **Proxy的**construct和apply

我们还会看到捕捉器中还有construct和apply，它们是应用于函数对象的：

```javascript
function foo() {
    console.log('foo函数被调用了', this, arguments)
    return 'foo'
}
const fooProxy = new Proxy(foo, {
    apply(target, thisArg, others) {
        console.log('函数的apply侦听')
        return target.apply(thisArg, others)
    },
     construct(target, thisArg, others) {
        console.log(target, argArray, newTarget)
         return new target()
    }
})
foo()
```

## 三、**Reflect的作用**

Reflect也是ES6新增的一个API，它是**一个对象**，字面的意思是**反射**

**那么这个Reflect有什么用呢？**

它主要提供了很多**操作JavaScript对象的方法**，有点像**Object中操作对象的方法**

比如Reflect.getPrototypeOf(target)类似于 Object.getPrototypeOf()，

如果我们有Object可以做这些操作，那么**为什么还需要有Reflect这样的新增对象**呢？

这是因为在早期的ECMA规范中没有考虑到这种<span style='color:red'>对 **对象本身** 的操作如何设计会更加规范，所以将这些API放到了Object上面</span>，但是**Object作为一个构造函数，这些操作实际上放到它身上并不合适**，另外还包含一些类似于 in、delete操作符，让JS看起来是会有一些奇怪的，所以在ES6中新增了Reflect，让我们这些操作都集中到了Reflect对象上

Object和Reflect对象之间的API关系，可以参考MDN文档：

<span style='color:red'>https://developer.mozilla.org/zhCN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods</span>

### 3.1 **Reflect的常见方法**

Reflect中有哪些常见的方法呢？它和Proxy是一一对应的，也是13个：

Reflect.getPrototypeOf(target)：类似于 Object.getPrototypeOf()

Reflect.setPrototypeOf(target, prototype)：设置对象原型的函数. 返回一个 Boolean， 如果更新成功，则返回true

Reflect.isExtensible(target)：类似于 Object.isExtensible()

Reflect.preventExtensions(target)：类似于 Object.preventExtensions()。返回一个Boolean

Reflect.getOwnPropertyDescriptor(target, propertyKey)：类似于 Object.getOwnPropertyDescriptor()。如果对象中存在 该属性，则返回对应的属性描述符, 否则返回 undefined.

Reflect.defineProperty(target, propertyKey, attributes)：和 Object.defineProperty() 类似。如果设置成功就会返回 true

Reflect.ownKeys(target)：返回一个包含所有自身属性（不包含继承属性）的数组。(类似于Object.keys(), 但不会受enumerable影响)

Reflect.has(target, propertyKey)：判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同

Reflect.get(target, propertyKey[, receiver])：获取对象身上某个属性的值，类似于 target[name]

Reflect.set(target, propertyKey, value[, receiver])：将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true

Reflect.deleteProperty(target, propertyKey)：作为函数的delete操作符，相当于执行 delete target[name]

Reflect.apply(target, thisArgument, argumentsList)：对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似

Reflect.construct(target, argumentsList[, newTarget])：对构造函数进行 new 操作，相当于执行 new target(...args)

### 3.2 **Reflect的使用**

我们可以将之前Proxy案例中对原对象的操作，都修改为Reflect来操作：

```javascript
const obj = { name: 'lcn', age: 18, height: 1.88 }
const objProxy = new Proxy(obj, {
  has: function(target, key) {
    return Reflect.has(target, key)
  },
  get(target, key) {
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    return Reflect.set(target, key, value)
  }
})
```

### 3.3 **Receiver的作用**

我们发现在使用getter、setter的时候有一个receiver的参数，它的作用是什么呢？

如果我们的源对象（obj）有setter、getter的访问器属性，那么可以通过receiver来改变里面的this

```javascript
const obj = { name: 'lcn', age: 18, height: 1.88 }
const objProxy = new Proxy(obj, {
  has: function(target, key) {
    return Reflect.has(target, key)
  },
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    return Reflect.set(target, key, value, receiver)
  }
})
```

### 3.4 **Reflect的construct**

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}
 function Animal() {}
const res = Reflect.construct(Person, ['lcn', 18], Animal)
console.log(res.__proto__ === Animal.prototype)   // true
```

## 四、响应式

### 4.1  什么是响应式

m有一个初始化的值，有一段代码使用了这个值，那么在m有一个新的值时，这段代码可以自动重新执行

```javascript
let m = 20
console.log(m * 2)
m = 40
```

上面的这样一种可以自动响应数据变量的代码机制，我们就称之为是响应式的

再来看一下对象的响应式：

![](../imgs/javascript/%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F.png)

### 4.2 响应式的函数设计

首先，执行的代码中可能不止一行代码，所以我们可以将这些代码放到一个函数中：那么我们的问题就变成了，当数据发生变化时，自动去执行某一个函数

![](../imgs/javascript/%E5%87%BD%E6%95%B0%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F.png)

但是有一个问题：在开发中我们是有很多的函数的，我们如何区分一个函数需要响应式，还是不需要响应式呢？

很明显，下面的函数中 foo 需要在obj的name发生变化时，重新执行，做出相应，bar函数是一个完全独立于obj的函数，它不需要执行任何响应式的操作

```javascript
const obj = {name: 'lcn'}

function foo() {
  let newName = obj.name
  console.log(newName)
}

function bar() {
  const res = 20
  return res
}
```

### 4.3 ****监听对象的变化****

方式一：通过 Object.defineProperty的方式（vue2采用的方式）

方式二：通过new Proxy的方式（vue3采用的方式）

### 4.4 实现响应式（vue2/vue3)

详见手写代码