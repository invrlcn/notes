# Iterator-Generator

## 一、**迭代器**

### 1.1 什么是迭代器

**迭代器**（iterator），是确使用户可在容器对象（container，例如链表或数组）上遍访的对象，使用该接口无需关心对象的内部实现细节。其行为像数据库中的光标，迭代器最早出现在1974年设计的CLU编程语言中，在各种编程语言的实现中，迭代器的实现方式各不相同，但是基本都有迭代器，比如Java、Python等

从迭代器的定义我们可以看出来，迭代器是帮助我们**对某个数据结构进行遍历的对象**。

在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：

迭代器协议定义了产生一系列值（无论是有限还是无限个）的标准方式：那么在js中这个标准就是一个**特定的next方法**

next方法有如下的要求：

一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象：

**done（boolean）**

如果迭代器可以产生序列中的下一个值，则为 false。（这等价于没有指定 done 这个属性。）

如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值

**value**

迭代器返回的任何 JavaScript 值。done 为 true 时可省略

### 1.2 迭代器代码

```javascript
const createIteratorArray(arr) {
    let index = 0
    return {
    next() {
    if(index < arr.length) {    
      return {done: false, value: arr[index++]}                     
      } else {
           return {done: true, value: undefined}
        }                                                                   
      }              
   }
}
const arr = ['bob', 'marty', 'tom']
console.log(createIteratorArray(arr).enxt())
console.log(createIteratorArray(arr).enxt())
console.log(createIteratorArray(arr).enxt())
console.log(createIteratorArray(arr).enxt())
```

## 二、可迭代对象

上面的代码整体来说看起来是有点奇怪的：我们获取一个数组的时候，需要自己创建一个index变量，再创建一个所谓的迭代器对象。事实上我们可以对上面的代码进行进一步的封装，让其变成一个可迭代对象

什么又是可迭代对象呢？

它和迭代器是不同的概念，当一个对象实现了iterable protocol协议时，它就是一个可迭代对象。这个对象的要求是必须实现 **@@iterator 方法**，在代码中我们使用 **Symbol.iterator 访问该属性****

**当一个对象变成一个可迭代对象的时候，进行某些迭代操作，比如 for...of 操作时，其实就会调用它的@@iterator 方法**

### 2.1 可迭代对象代码

```javascript
const info = {
      name: 'bob',
      age: 18,
      height: 1.88,
      [Symbol.iterator]() {
        let index = 0
        return {
          next: () => {
            // if (index < Object.keys(this).length) {
            if (index < Object.values(this).length) {
              // if (index < Object.entries(this).length) {
              return {
                done: false,
                value: Object.values(this)[index++]
              }
            } else {
              return {
                done: true
              }
            }
          },
          return() {
            return {
              done: true
            }
          }
        }
      }
    }
    const objIterator = info[Symbol.iterator]()
    console.log(objIterator.next())
    console.log(objIterator.next())
    console.log(objIterator.next())
    console.log(objIterator.next())

    for (const i of info) {
      console.log(i)
    }
```

## 三、原生迭代器对象

事实上我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个迭代器对象的：String、Array、Map、Set、arguments对象、NodeList集合

```javascript
const str = 'hello'
for(const s of str) {
  console.log(s)
}

const arr = ['bob', 'marty', 'tom']
for(const i of arr) {
  console.log(i)
}

function foo(x, y, z) {
 for(const a of arguments) {
   console.log(a)
 } 
}
foo(10, 20, 30)

const map = new Map()
map.set(['10', '20', '30'])

const set = new Set()
set.add(['10', '20', '30'])
```

## 四、可迭代对象的应用

JavaScript中语法：for ...of、展开语法（spread syntax）、yield*、解构赋值（Destructuring_assignment）

创建一些对象时：new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable])

一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)

## 五、自定义类的迭代

Array、Set、String、Map等类创建出来的对象都是可迭代对象：

在面向对象开发中，我们可以通过class定义一个自己的类，这个类可以创建很多的对象：如果我们也希望自己的类创建出来的对象默认是可迭代的，那么在设计类的时候我们就可以添加上@@iterator 方法

案例：创建一个classroom的类 

教室中有自己的位置、名称、当前教室的学生； 这个教室可以进来新学生（push）；创建的教室对象是可迭代对象

```javascript
class Classroom {
  constructor(name, address, iteratorStudent) {
      this.name = name
      this.address = address
      this.iteratorStudent = iteratorStudent
  }
  entry(newStudent) {
      this.iteratorStudent.push(newStudent)
  }
  [Symbol.iterator]() {
      let index = 0
      return {
           next: () => {
              if(index < this.iteratorStudent.length) {
                    return {done: false, value: this.iteratorStudent[index++]}
              } else {
                 		return {done: true}
              }
           },
           return() {
                console.log('迭代器提前终止')
                return {done: true}
           }
      }
  }
}
const c = new Classroom('qh', 'bj', ['zs', 'ls', 'zl'])
for (const i of c) {
  console.log(i)
  
  if(i  === 'ls') {
       break
  }
}
```

## 六、迭代器的中断

迭代器在某些情况下会在没有完全迭代的情况下中断：比如遍历的过程中通过break、continue、return、throw中断了循环操作，在解构的时候，没有解构所有的值。这个时候我们想要监听中断的话，可以添加**return方法**：

详情见标题五代码

## 七、生成器

### 7.1 什么是生成器

生成器是ES6中新增的一种函数**控制**、**使用**的方案，它可以让我们**更加灵活的控制函数什么时候继续执行、暂停执行**等

平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常

**生成器函数也是一个函数，但是和普通的函数有一些区别：**

首先，生成器函数需要在function的后面加一个符号：* ，其次，生成器函数可以通过yield关键字来控制函数的执行流程：

最后，生成器函数的返回值是一个Generator（生成器）：

生成器事实上是一种特殊的迭代器：MDN：Instead, they return a special type of iterator, called a **Generator**

### 7.2 生成器函数的执行

```javascript
function* foo() {
  console.log('开始执行')
  const v1 = 100
  console.log(v1)
  yield v1
  const v2 = 200
  console.log(v2)
  yield v2
  const v3 = 300
  console.log(v3)
  yield v3
  console.log('执行结束')
}
// 生成器
const generator = foo()
// 执行到第一个yield，暂停
console.log(generator.next())
// 执行到第二个yield，暂停
console.log(generator.next())
// 执行到第三个yield，暂停
console.log(generator.next())
// 执行剩余代码
console.log(generator.next())
```

### 7.3 生成器传递参数-next函数

函数既然可以暂停来分段执行，那么函数应该是可以传递参数的，我们是否可以给每个分段来传递参数呢？答案是可以的

**我们在调用next函数的时候，可以给它传递参数，那么这个参数会作为上一个yield语句的返回值**

注意：也就是说我们是为本次的函数代码块执行提供了一个值

```javascript
function* foo(v) {
  console.log('开始执行', v)
  const v1 = v + 'aaa'
  console.log(v1)
  yield v1
  const v2 = v1 + 'bbb'
  console.log(v2)
  yield v2
  const v3 = v2 + 'ccc'
  console.log(v3)
  yield v3
  console.log('执行结束')
}
// 生成器
const generator = foo('invr')
// 执行到第一个yield，暂停
console.log(generator.next())
// 执行到第二个yield，暂停
console.log(generator.next())
// 执行到第三个yield，暂停
console.log(generator.next())
// 执行剩余代码
console.log(generator.next())
```

### 7.4 生成器提前结束-return函数

```javascript
function* foo(a) {
  const v1 = yield a
  const v2 = yield v1
  const v3 = yield v2
  const v4 = yield v3
}
const generator = foo('aaa')
console.log(generator.next())
console.log(generator.next(222))
console.log(generator.return(333))
console.log(generator.next(444))
```

### 7.5 生成器抛出异常

除了给生成器函数内部传递参数之外，也可以给生成器函数内部抛出异常：

抛出异常后我们可以在生成器函数中捕获异常，但是在catch语句中不能继续yield新的值了，但是可以在catch语句外使用yield继续中断函数的执行

```javascript
function* foo() {
  console.log('开始执行')
  try {
        yield 'invr'
  } catch(err) {
        console.log(err)
  }
  yield 'bob'
  console.log('结束执行')
}
const generator = foo()
generator.next()
generator.throw('err throw')
generator.next()
```

### 7.6 生成器替代迭代器

```js
class Person {
    constructor(name, age, height) {
      this.name = name
      this.age = age
      this.height = height
    }

    // *[Symbol.iterator]() {
    //   for (let i = 0; i < Object.values(this).length; i++) {
    //     yield Object.values(this)[i]
    //   }
    // }

    // 语法糖写法
    *[Symbol.iterator]() {
      yield* Object.values(this)
    }
  }
  const p = new Person('bob', 18, 1.88)

  for (const i of p) {
    console.log(i)
  }
```

