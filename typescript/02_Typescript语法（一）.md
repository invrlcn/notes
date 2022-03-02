# Typescript语法

## 一、**Typescript中的变量**

### 1.1 **变量的声明**

我们已经强调过很多次，在TypeScript中定义变量需要指定 **标识符** 的类型。 

所以完整的声明格式如下： 

声明了类型后**TypeScript就会进行类型检测**，声明的类型可以称之为**<span style='color:red'>类型注解</span>**

**<span style='color:red'>var/let/const 标识符: 数据类型 = 赋值</span>**

比如我们声明一个message，完整的写法如下： 

注意：**这里的string是小写的，和String是有区别的** 。**string是TypeScript中定义的字符串类型**，**String是ECMAScript中定义的一个类**

```typescript
let message: string = 'hello, world'
```

如果我们**给message赋值其他类型的值，那么就会报错**：

![](../imgs/typescript/typescript%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3.png)

### 1.2 **声明变量的关键字**

在TypeScript定义变量（标识符）和ES6之后一致，可以使用var、let、const来定义

```typescript
var message: string = 'hello, world'
let age: number = 18
const height: number = 1.88
```

当然，**在tslint中并不推荐使用var来声明变量**： 可见，在TypeScript中并不建议再使用var关键字了，主要原因和ES6升级后let和var的区别是一样的，**var是没有块级作用域的，会引起很多的问题**

![](../imgs/typescript/%E5%A3%B0%E6%98%8E%E5%8F%98%E9%87%8F%E7%9A%84%E5%85%B3%E9%94%AE%E5%AD%97.png)

### 1.3 **变量的类型推导（推断）**

在开发中，有时候为了方便起见我们**并不会在声明每一个变量时都写上对应的数据类型，我们更希望可以通过TypeScript本身的特性帮助我们推断出对应的变量类型**：

![](../imgs/typescript/%E5%8F%98%E9%87%8F%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%8E%A8%E5%AF%BC.png)

**在一个变量第一次赋值时，会根据后面的赋值内容的类型，来推断出变量的类型**： 上面的message就是因为后面赋值的是一个string类型，所以message虽然没有明确的说明，但是依然是一个string类型

## 二、**JavaScript和TypeScript的数据类型**

我们经常说TypeScript是JavaScript的一个超级：

![](../imgs/typescript/JavaScript%E5%92%8CTypeScript%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.png)

### 2.1 **JavaScript类型 – number类型**

数字类型是我们开发中经常使用的类型，TypeScript和JavaScript一样，不区分整数类型（int）和浮点型 （double），统一为number类型

ES6新增了二进制和八进制的表示方法，而TypeScript也是支持二进制、八进制、十六进制的表示：

![](../imgs/typescript/%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E5%8F%91.png)

### 2.2 **JavaScript类型 – boolean类型**

boolean类型只有两个取值：true和false

```typescript
let flag: boolean = true
flag = false
```

### 2.3 **JavaScript类型 – string类型**

string类型是字符串类型，可以使用单引号或者双引号表示：同时也支持ES6的模板字符串来拼接变量和字符串：

```typescript
const name: string = 'lcn'
const age = 18

const info = `my name is ${name}, age is ${age}`
```

### 2.4 **JavaScript类型 – Array类型**

数组类型的定义也非常简单，有两种方式：

```typescript
const names: string[] = ['aaa', 'bbb', 'ccc']
const names2: Array<string> = ['aaa', 'bbb', 'ccc']

names.push('invr')
names2.push('invr')
```

如果添加其他类型到数组中，那么会报错：

![](../imgs/typescript/Array%E7%B1%BB%E5%9E%8B.png)

### 2.5 **JavaScript类型 – Object类型**

object对象类型可以用于描述一个对象：

```typescript
const myinfo: object = {
  name: 'bob',
  age: 18
}
```

但是从myinfo中我们不能获取数据，也不能设置数据：

```typescript
myinfo['name'] = 'lcn'
console.log(myinfo['age'])
```

![](../imgs/typescript/object%E7%B1%BB%E5%9E%8B.png)

### 2.6 **JavaScript类型 – Symbol类型**

在ES5中，如果我们是不可以在对象中添加相同的属性名称的，比如下面的做法：

![](../imgs/typescript/symbol%E7%9B%B8%E5%90%8C%E5%B1%9E%E6%80%A7%E5%90%8D.png)

通常我们的做法是定义两个不同的属性名字：比如identity1和identity2。但是我们也可以通过symbol来定义相同的名称，因为Symbol函数返回的是不同的值：

```typescript
const s1: symbol = Symbol('title')
const s2: symbol = Symbol('title')

const person = {
  [s1]: '程序员',
  [s2]: '老师'
}
```

### 2.7 **JavaScript类型 – null和undefined类型**

在 JavaScript 中，undefined 和 null 是两个基本数据类型

**在TypeScript中，它们各自的类型也是undefined和null，也就意味着它们既是实际的值，也是自己的类型**：

```typescript
let n: null = null
let u: undefined = undefined
```

### 2.8 **TypeScript类型 - any类型**

在某些情况下，我们**确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型**（类似 

于Dart语言中的dynamic类型）。 

any类型有点像一种讨巧的TypeScript手段： 我们**可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法** 

**我们给一个any类型的变量赋值任何的值，比如数字、字符串的值**

```typescript
let a: any = 'lcn'

a = 123
a = true

const aArray: any[] = ['aaa', 123, 1.88]
```

如果**对于某些情况的处理过于繁琐不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候** 

**我们可以使用any**： 包括在Vue源码中，也会使用到any来进行某些类型的适配

### 2.9 **TypeScript类型 - unknown类型**

unknown是TypeScript中比较特殊的一种类型，它用于**描述类型不确定的变量**

![](../imgs/typescript/unknown%EF%BC%881%EF%BC%89.png)

![](../imgs/typescript/unknown%EF%BC%882%EF%BC%89.png)

### 2.10 **TypeScript类型 - void类型**

**void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型**：我们可以将null和undefined赋值给void类型，也就是函数可以返回null或者undefined

```typescript
function sum(n1: number, n2: number) {
  console.log(n1 + n2)
}
```

这个函数我们没有写任何类型，那么它默认返回值的类型就是void的，我们也可以显示的来指定返回值是void：

```typescript
function sum(n1: number, n2: number): void {
  console.log(n1 + n2)
}
```

### 2.11 **TypeScript类型 - never类型**

**never 表示永远不会发生值的类型**，比如一个函数：

如果一个函数是一个死循环或者抛出一个异常，那么这个函数会返回东西吗？不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型

![](../imgs/typescript/never%E7%B1%BB%E5%9E%8B%EF%BC%881%EF%BC%89.png)

![](../imgs/typescript/never%E7%B1%BB%E5%9E%8B%EF%BC%882%EF%BC%89.png)

### 2.12 **TypeScript类型 - tuple类型**

**tuple是元组类型，很多语言中也有这种数据类型，比如Python、Swift等**

```typescript
const info:  [string, number, number] = ['bob', 18, 1.88]
const item1 = info[0]   // bob  string类型
const item2 = info[1]   // 18   number类型
```

那么tuple和数组有什么区别呢？

首先，**数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中**。（可以放在对象或者元组中）

其次，**元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型**

![](../imgs/typescript/tuple%E7%B1%BB%E5%9E%8B.png)

#### 2.12.1 **Tuple的应用场景**

那么tuple在什么地方使用的是最多的呢？

**tuple通常可以作为返回的值，在使用的时候会非常的方便**

![](../imgs/typescript/tuple%E7%9A%84%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF.png)

## 三、**Typescrip中的函数**

### 3.1 **函数的参数类型**

函数是JavaScript非常重要的组成部分，**TypeScript允许我们指定函数的参数和返回值的类型**。 

**参数的类型注解** 

声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型：

![](../imgs/typescript/%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B.png)

### 3.2 **函数的返回值类型**

我们也可以添加返回值的类型注解，这个注解出现在函数列表的后面：

![](../imgs/typescript/%E5%87%BD%E6%95%B0%E7%9A%84%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B.png)

**和变量的类型注解一样，我们通常情况下不需要返回类型注解，因为TypeScript会根据 return 返回值推断函数的返回类型**：某些第三方库处于方便理解，会明确指定返回类型，但是这个看个人喜好

### 3.3 **匿名函数的参数**

匿名函数与函数声明会有一些不同： 

**当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时； 该函数的参数会自动指定类型**

```typescript
const arr = ['aaa', 'bbb', 'ccc']
arr.forEach(i => {
  console.log(i.toUpperCase())
})
```

我们并没有指定item的类型，但是item是一个string类型：

这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型，这个过程称之为**上下文类型**（*contextual typing*），因为函数执行的上下文可以帮助确定参数和返回值的类型

### 3.4 **对象类型**

如果我们希望限定一个函数接受的参数是一个对象，这个时候要如何限定呢？

我们可以使用对象类型

```typescript
function print(point: {x: number, y: number}) {
  console.log('x:', point.x, 'y:', point.y)
}
print({10, 20})
```

在这里我们使用了一个对象来作为类型：

在对象我们可以添加属性，并且告知TypeScript该属性需要是什么类型，属性之间可以使用 , 或者 ; 来分割，最后一个分隔符是可选的，每个属性的类型部分也是可选的，如果不指定，那么就是any类型

### 3.5 **可选类型**

对象类型也可以指定哪些属性是可选的，可以在属性的后面添加一个**?：**

```typescript
function print(point: {x: number, y: number, z?: number}) {
  console.log('x:', point.x, 'y:', point.y)
  if(point.z) {
      console.log('z:', point.z)                
  }
}
print({x: 10, y: 20})
print({x: 10, y: 20, z: 30})
```

**可选类型可以看做是 类型 和 undefined 的联合类型：**

![](../imgs/typescript/%E5%8F%AF%E9%80%89%E7%B1%BB%E5%9E%8B.png)

### 3.6 **联合类型**

TypeScript的类型系统**允许我们使用多种运算符**，从现有类型中构建新类型

我们来使用第一种组合类型的方法：**联合类型**（Union Type）

联合类型是由**两个或者多个其他类型组成的类型**，表示**可以是这些类型中的任何一个值**，联合类型中的**每一个类型被称之为联合成员**（union's *members*）

```typescript
function printId(id: number | string) {
  console.log('你的id是:' id)
}
printId(10)
printId('bob')
```

#### 3.6.1 **使用联合类型**

传入给一个联合类型的值是非常简单的：只要保证是联合类型中的某一个类型的值即可，但是我们拿到这个值之后，我们应该如何使用它呢？因为它可能是任何一种类型，比如我们拿到的值可能是string或者number，我们就不能对其调用string上的一些方法

那么我们怎么处理这样的问题呢？

我们需要使用**缩小（narrow）联合**，**TypeScript可以根据我们缩小的代码结构，推断出更加具体的类型**

```typescript
function printId(id: number | string) {
  if(typeof id === 'string') {
     // 确定是string类型
    console.log('你的id是:' id.toUpperCase())
  } else {
    // 确定是number类型
  	console.log('你的id是:' id)              
  }
}
printId(10)
printId('bob')
```

### 3.7 **类型别名**

在前面，我们通过在类型注解中编写 对象类型 和 联合类型，但是当我们想要多次在其他地方使用时，就要编写多次。 

比如我们**可以给对象类型起一个别名**：

![](../imgs/typescript/%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D%EF%BC%881%EF%BC%89.png)

![](../imgs/typescript/%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D%EF%BC%882%EF%BC%89.png)

### 3.8 **类型断言as**

有时候**TypeScript无法获取具体的类型信息，这个我们需要使用类型断言**（Type Assertions）

比如我们通过 document.getElementById，TypeScript只知道该函数会返回 HTMLElement ，但并不知道它 

具体的类型：

```typescript
const myEL = document.getElementById('img') as HTMLImageElement
myEl.src = '图片地址'
```

**TypeScript只允许类型断言转换为 更具体 或者 不太具体 的类型版本，此规则可防止不可能的强制转换：**

### 3.9 **非空类型断言!**

当我们编写下面的代码时，在执行ts的编译阶段会报错：这是**因为传入的message有可能是为undefined**的，这个时候是不能执行方法的

![](../imgs/typescript/%E9%9D%9E%E7%A9%BA%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80%EF%BC%81.png)

但是，**我们确定传入的参数是有值的**，这个时候我们可以使用非空类型断言：

**非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测**

```typescript
function printMessage(message?: string) {
  console.log(message!.toUpperCase())
}
```

### 3.10 **可选链的使用**

可选链事实上并不是TypeScript独有的特性，它是ES11（ES2020）中增加的特性： 

**可选链使用可选链操作符 ?.； 它的作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行**

```typescript
type PersonType = {
  name: string,
  friend?: {
      name: string,
      age?: number
  }
}

const info: PersonType = {
  name: 'bob',
  friend: {
     name: 'tom'
  }
}

console.log(info.name)
console.log(info.friend?.name)
console.log(info.friend?.age)
```

### 3.11 **??和!!的作用**

有时候我们还会看到 !! 和 ?? 操作符，这些都是做什么的呢？

!!操作符：

**将一个其他类型转换成boolean类型，类似于Boolean(变量)的方式**

??操作符：

它是ES11增加的新特性，

**空值合并操作符**（**??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数**

```typescript
const message = ''
let flag1 = Boolean(message)
let flag2 = !!message

const msg = 'hello'
const res = msg ?? 'world'
```

### 3.12 **字面量类型**

除了前面的类型之外，也可以使用**字面量类型**（literal types）

![](../imgs/typescript/%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B.png)

那么这样做有什么意义呢？ 

默认情况下这么做是没有太大的意义的，但是我们可以将多个类型联合在一起

![](../imgs/typescript/%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B%E5%BA%94%E7%94%A8.png)

### 3.13 **字面量推理**

![](../imgs/typescript/%E5%AD%97%E9%9D%A2%E9%87%8F%E6%8E%A8%E7%90%86.png)

我们的对象再进行字面量推理的时候，**info其实是一个 {url: string, method: string}**，所以我们没办法将一个 string 赋值给一个 字面量 类型

![](../imgs/typescript/%E5%AD%97%E9%9D%A2%E9%87%8F%E5%BA%94%E7%94%A8%EF%BC%881%EF%BC%89.png)

![](../imgs/typescript/%E5%AD%97%E9%9D%A2%E9%87%8F%E5%BA%94%E7%94%A8%EF%BC%882%EF%BC%89.png)