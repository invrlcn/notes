# vue2的OPtions-API

## 一、**复杂data的处理方式**

我们知道，在模板中可以直接通过**插值语法**显示一些**data中的数据**。 

但是在某些情况，我们可能需要对**数据进行一些转化后**再显示，或者需要**将多个数据结合起来**进行显示

比如我们需要对多个data数据进行运算、三元运算符来决定结果、数据进行某种转化后显示；在模板中使用表达式，可以非常方便的实现，但是设计它们的初衷是用于简单的运算； 在模板中放入太多的逻辑会让模板过重和难以维护； 并且如果多个地方都使用到，那么会有大量重复的代码

我们有没有什么方法可以将逻辑抽离出去呢？ 

可以，其中一种方式就是将逻辑抽取到一个method中，放到**methods**的options中； 但是，这种做法有一个直观的弊端，就是所有的data使用过程都会变成了一个方法的调用； 另外一种方式就是使用计算属性**computed**

## 二、**认识计算属性computed**

**什么是计算属性呢？** 

官方并没有给出直接的概念解释； 而是说：对于**任何包含响应式数据的复杂逻辑**，你都应该使用**计算属性**

计算属性将被混入到组件实例中。所有 **getter** 和 **setter** 的 **this 上下文自动地绑定为组件实例**

计算属性的用法： 

**选项：**computed 

**类型：**{ [key: string]: Function | { get: Function, set: Function } }

**注意：计算属性看起来像是一个函数，但是我们在使用的时候不需要加()**

## 三、**计算属性 vs methods**

我们会发现计算属性和methods的实现看起来是差别是不大的，而且**<span style='color:red'>计算属性是有缓存</span>**的

**计算属性的缓存**:

计算属性会基于它们的**依赖关系进行缓存**； 在**数据不发生变化**时，计算属性是**不需要重新计算**的； 但是如果**依赖的数据发生变化**，在使用时，**计算属性依然会重新进行计算**

## 四、**计算属性的setter和getter**

计算属性在大多数情况下，只需要一个**getter方法**即可，所以我们会将计算属性直接**写成一个函数**。 

但是，如果我们确实想**设置计算属性的值**呢？ 

这个时候我们也可以给计算属性设置一个setter的方法

```javascript
 computed: {
        fullName: {
          get() {
            return this.firstName + '' + this.lastName
          },
          set(newValue) {
            const names = newValue.split(" ")
            this.firstName = names[0]
            this.lastName = names[1]
          }
        }
      }
```

## 五、**源码如何对setter和getter处理**

你可能觉得很奇怪，Vue内部是如何对我们传入的是一个getter，还是说是一个包含setter和getter的对象进行处理的呢？ 

事实上Vue源码内部只是做了一个逻辑判断而已

![](../imgs/vue3/%E6%BA%90%E7%A0%81%E5%AF%B9%E4%BA%8Egetter%E5%92%8Csetter%E7%9A%84%E5%A4%84%E7%90%86.png)

## 六、**认识侦听器watch**

### 6.1 **什么是侦听器呢？** 

开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中； 当数据变化时，template会自动进行更新来显示最新的数据； 但是在某些情况下，我们希望在代码逻辑中监听某个数据的变化，这个时候就需要用侦听器watch来完成了

侦听器的用法如下： 

**选项：**watch 

**类型：**{ [key: string]: string | Function | Object | Array}

### 6.2 **侦听器案例**

**举个栗子（例子）：** 

比如现在我们希望用户在input中输入一个问题； 

每当用户输入了最新的内容，我们就获取到最新的内容，并且使用该问题去服务器查询答案； 那么，我们就需要实时的去获取最新的数据变化

```javascript
<label for="question">
      请输入问题：
      <input type="text" v-model="question">
</label>

watch: {
        question(newValue, oldValue) {
          this.getAnswer(newValue)
        }
      },
      methods: {
        getAnswer(question) {
          console.log(`${question}的问题答案是invrlcn`)
        }
      }
```

### 6.3 **侦听器watch的配置选项**

我们先来看一个例子： 

当我们点击按钮的时候会修改info.name的值

这个时候我们使用watch来侦听info，可以侦听到吗？答案是不可以。 

这是因为默认情况下，**watch只是在侦听info的引用变化**，对于**内部属性的变化是不会做出响应**的： 

这个时候我们可以使用一个选项deep进行更深层的侦听； 注意前面我们说过watch里面侦听的属性对应的也可以是一个Object； 

还有**另外一个属性**，是**希望一开始的就会立即执行一次**： 

这个时候我们使用immediate选项； 这个时候无论后面数据是否有变化，侦听的函数都会有限执行一次

```javascript
watch: {
  info: {
      handle(newValue, oldValue) {
            console.log(newValue)
      },
   deep: true,
   immediate: true
  },
  'info.name': function(newValue, oldValue) {
       console.log(newValue, oldValue)
  }
}
```

### 6.4 **侦听器watch的其他方式**

**方式一**：

```javascript
// 字符串方法名
b: 'invrlcn'

// 可以传入一个数组，它们会被一一调用
f: [
  'handle',
  function foo(newValue, oldValue) {
         console.log('foo')
  },
  {
     info: function(newValue, oldValue) {
          console.log(info)
     }
  }
]
```

**方式二：**

Vue3文档中没有提到的，但是Vue2文档中有提到的是侦听对象的属性：

```javascript
'info.name': function(newValue, oldValue) {
   console.log(newValue, oldValue)
}
```

**方式三**：**使用 $watch 的API**：

我们可以在created的生命周期中，使用 this.$watch 来侦听； 

第一个参数是要侦听的源

第二个参数是侦听的回调函数callback

第三个参数是额外的其他选项，比如deep、immediate

```javascript
created() {
  this.$watch('message', (newValue, oldValue) => {
         console.log(newValue, oldValue)
  }, 
  	{deep: true, immediate: true}
  )
}
```

## 七、**v-model**

### 7.1 **v-model的基本使用**

**表单提交**是开发中非常常见的功能，也是和用户交互的重要手段： 

比如用户在登录、注册时需要提交账号密码

比如用户在检索、创建、更新信息时，需要提交一些数据

这些都要求我们可以在**代码逻辑中获取到用户提交的数据**，我们通常会使用**v-model指令**来完成： 

v-model指令可以在表单 input、textarea以及select元素上创建双向数据绑定； 它会根据控件类型自动选取正确的方法来更新元素； 尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理

### 7.2 **v-model的原理**

官方有说到，**v-model的原理**其实是背后有两个操作： 

**v-bind绑定value属性的值**

**v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中**

![](../imgs/vue3/v-model%E5%8E%9F%E7%90%86.png)

### 7.3 **更加复杂的v-model**

![](../imgs/vue3/%E6%9B%B4%E5%8A%A0%E5%A4%8D%E6%9D%82%E7%9A%84v-model.png)

### 7.4 **v-model绑定的表单类型**

#### 7.4. 1 **v-model绑定textarea**

```javascript
<div>
	<textarea v-model="article" cols="30" row="20">
  	<h2>当前值：{{article}}</h2>
  </textarea>  
</div>
```

#### 7.4.2 **v-model绑定checkbox**

我们来看一下v-model绑定**checkbox**：单个勾选框和多个勾选框 

**单个勾选框：** 

v-model即为布尔值。 此时input的value并不影响v-model的值。 

**多个复选框：** 

当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组。 当选中某一个时，就会将input的value添加到数组中

```javascript
// 单选
<div>
	<label for="argment">
  	<input type="checkbox" v-model="isAgree"/>同意协议
  </label>
	<h2>当前值：{{isAgree}}</h2>
</div>

// 多选
<div>
	<label for="basketball">
  	<input type="checkbox" v-model="hobbies" value="basketball"/>篮球
  </label>
 <label for="football">
  	<input type="checkbox" v-model="hobbies" value="football"/>足球
  </label>
 <label for="tennis">
  	<input type="checkbox" v-model="hobbies" value="tennis"/>网球
  </label>
	<h2>当前值：{{hobbies}}</h2>
</div>
```

#### 7.4.3 **v-model绑定radio**

v-model绑定**radio**，用于选择其中一项

```javascript
<div>
	<label for="basketball">
  	<input type="radio" v-model="hobbies" value="basketball"/>篮球
  </label>
 <label for="football">
  	<input type="radio" v-model="hobbies" value="football"/>足球
  </label>
	<h2>当前值：{{hobbies}}</h2>
</div>
```

#### 7.4.4 **v-model绑定select**

**和checkbox一样，select也分单选和多选两种情况:** 

**单选：只能选中一个值** 

v-model绑定的是一个值； 当我们选中option中的一个时，会将它对应的value赋值到fruit中； 

**多选：可以选中多个值** 

v-model绑定的是一个数组； 当选中多个值时，就会将选中的option对应的value添加到数组fruit中

```javascript
// 单选
<div>
	<select v-model="fruit">
  	<option  value="apple">苹果</option>
    <option  value="orange">橘子</option>
    <option  value="banana">香蕉</option>
  </select>
	<h2>当前值：{{fruit}}</h2>
</div>

// 多选
<div>
	<select v-model="fruit" multiple size="3">
  	<option  value="apple">苹果</option>
    <option  value="orange">橘子</option>
    <option  value="banana">香蕉</option>
  </select>
	<h2>当前值：{{fruit}}</h2>
</div>
```

#### 7.4.5 **v-model的值绑定**

目前我们在前面的案例中大部分的值都是在template中固定好的： 

比如gender的两个输入框值male、female； 比如hobbies的三个输入框值basketball、football、tennis

在真实开发中，我们的数据可能是来自服务器的，那么我们就可以先将值请求下来，绑定到data返回的对象中， 再通过v-bind来进行值的绑定，这个过程就是**值绑定**。 这里不再给出具体的做法，因为还是v-bind的使用过程

### 7.5 **v-model修饰符**

#### 7.5.1 **.lazy**

**lazy修饰符是什么作用呢？** 

默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次内容输入后就将最新的值和绑定的属性进行同步； 如果我们在v-model后跟上lazy修饰符，那么会将绑定的事件切换为 change 事件，只有在提交时（比如回车）才会触发

```javascript
<template>
	<input type="text" v-model.lazy="message"/>
  <h2>{{message}}</h2>
</template>
```

#### 7.5.2 **.number**

message总是**string**类型，即使在我们设置**type为number也是string类型**。如果我们希望**转换为数字类型**，那么可以使用 .**number 修饰符**。另外，在我们进行逻辑判断时，如果是一个string类型，在可以转化的情况下会进行隐式转换的：

```javascript
<template>
  // 并不会转换为number
  <input type="number" v-model="message"/>
  // .number进行转换
	<input type="text" v-model.number="message"/>
  <h2>{{message}}</h2>
</template>

// 下面的score在进行判断的过程中会进行隐式转化的
const score = '100'
if(score > 90) {
  console.log('优秀')
}
console.log(typeof score)  // string
```

#### 7.5.3 .**trim**

如果要**自动过滤用户输入的首尾空白字符**，可以给v-model添加 trim 修饰符：

```javascript
<template>
 // 去除空格
  <input type="text" v-model.trim="msg"/>
 </template>
```

### 7.6 **v-mode组件上使用**

v-model也可以使用在组件上，Vue2版本和Vue3版本有一些区别

具体后面再说