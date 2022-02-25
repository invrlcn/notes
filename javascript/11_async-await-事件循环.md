# async-await-事件循环

## 一、**async关键字**

### 1.1 **异步函数 async function**

async关键字用于声明一个异步函数：async是asynchronous单词的缩写，异步、非同步。sync是synchronous单词的缩写，同步、同时

async异步函数可以有很多中写法：

```javascript
async function foo1() {}
const foo2 = async function() {}
const foo3 = async () => {}
class Foo4 {
  async foo() {}
}
```

### 1.2 **异步函数的执行流程**

异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行

**异步函数有返回值时，和普通函数会有区别：**

情况一：异步函数也可以有返回值，但是异步函数的返回值会被包裹到Promise.resolve中

情况二：如果我们的异步函数的返回值是Promise，Promise.resolve的状态会由Promise决定

情况三：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定

如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递

## 二、**await关键字**

**async函数另外一个特殊之处就是可以在它内部使用await关键字，而普通函数中是不可以的**

await关键字有什么特点呢？

通常使用await时后面会跟上**一个表达式**，这个表达式会返回**一个Promise**，那么await会等到P**romise的状态变成fulfilled状态**，之后**继续执行异步函数**

如果await后面是一个普通的值，那么会直接返回这个值

如果await后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值

如果await后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值

## 三、**进程和线程**

**线程和进程是操作系统中的两个概念：**

进程（process）：计算机已经运行的程序，是操作系统管理程序的一种方式

线程（thread）：操作系统能够运行运算调度的最小单位，通常情况下它被**包含在进程中**

进程：我们可以认为，启动一个应用程序，就会默认启动一个进程（也可能是多个进程）

线程：每一个进程中，都会启动至少一个线程用来执行程序中的代码，这个线程被称之为主线程，所以我们也可以说进程是线程的容器

## 四、**操作系统 – 进程 – 线程**

![](../imgs/javascript/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E8%BF%9B%E7%A8%8B-%E7%BA%BF%E7%A8%8B.png)

## 五、**操作系统的工作方式**

**操作系统是如何做到同时让多个进程（边听歌、边写代码、边查阅资料）同时工作**呢？

**这是因为CPU的运算速度非常快，它可以快速的在多个进程之间迅速的切换**，当我们进程中的线程获取到时间片时，就可以快速执行我们编写的代码。对于用户来说是感受不到这种快速的切换的

## 六、**浏览器中的JavaScript线程**

我们经常会说**JavaScript是单线程**的，但是**JavaScript的线程应该有自己的容器进程**：浏览器或者Node

**浏览器是一个进程吗，它里面只有一个线程吗？**

目前<span style='color:red'>多数的浏览器其实都是多进程的</span>，当我们<span style=color:red>打开一个tab页面时就会开启一个新的进程</span>，**这是为了防止一个页面卡死而造成所有页面无法响应，整个浏览器需要强制退出。每个进程中又有很多的线程，其中包括执行JavaScript代码的线程**

**JavaScript的代码执行是在一个单独的线程中执行的：**

这就意味着JavaScript的代码，**在同一个时刻只能做一件事**，**如果这件事是非常耗时的，就意味着当前的线程就会被阻塞**

**所以真正耗时的操作，实际上并不是由JavaScript线程在执行的：**

浏览器的每个进程是多线程的，那么**其他线程可以来完成这个耗时的操作**，比如**网络请求**、**定时器**，我们只需要在特性的时候执行应该有的回调即可

## 七、**浏览器的事件循环**

**如果在执行JavaScript代码的过程中，有异步操作呢？**

![](../imgs/javascript/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.png)

## 八、**宏任务和微任务**

**事件循环中并非只维护着一个队列，事实上是有两个队列：**

**宏任务队列（macrotask queue）**：ajax、setTimeout、setInterval、DOM监听、UI Rendering等

**微任务队列（microtask queue）**：Promise的then回调、 Mutation Observer API、queueMicrotask()等

**事件循环对于两个队列的优先级是怎么样的呢？**

1.**main script中的代码优先执行**（编写的顶层script代码）

2.在**执行任何一个宏任务之前**（不是队列，是一个宏任务），**都会先查看微任务队列中是否有任务需要执行**：

也就是宏任务执行之前，必须保证微任务队列是空的，如果不为空，那么就优先执行微任务队列中的任务（回调）

## 九、**Node的事件循环**

浏览器中的EventLoop是根据HTML5定义的规范来实现的，不同的浏览器可能会有不同的实现，而Node中是由libuv实现的

这里我们来给出一个Node的架构图：

我们会发现libuv中主要维护了一个EventLoop和worker threads（线程池）

EventLoop负责调用系统的一些其他操作：文件的IO、Network、child-processes等

ibuv是一个多平台的专注于异步IO的库，它最初是为Node开发的，但是现在也被使用到Luvit、Julia、pyuv等其他地方

![](../imgs/javascript/node%E6%9E%B6%E6%9E%84%E5%9B%BE.png)

### 9.1 **Node事件循环的阶段**

**事件循环像是一个桥梁**，是连接着应用程序的**JavaScript和系统调用**之间的通道：

无论是我们的**文件IO、数据库、网络IO、定时器、子进程**，在完成对应的操作后，都会**将对应的结果和回调函数**放到事件循环（任务队列）中，**事件循环会不断的从任务队列中取出对应的事件（回调函数）来执行**

**但是一次完整的事件循环Tick分成很多个阶段：**

**定时器（Timers）**：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数

**待定回调（Pending Callback）**：对某些系统操作（如TCP错误类型）执行回调，比如TCP连接时接收到ECONNREFUSED

**idle, prepare**：仅系统内部使用

**轮询（Poll）**：检索新的 I/O 事件；执行与 I/O 相关的回调

**检测（check）**：setImmediate() 回调函数在这里执行

**关闭的回调函数**：一些关闭的回调函数，如：socket.on('close', ...)

### 9.2 **Node事件循环的阶段图解**

![](../imgs/javascript/Node%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E7%9A%84%E9%98%B6%E6%AE%B5%E5%9B%BE%E8%A7%A3.png)

### 9.3 **Node的宏任务和微任务**

我们会发现从一次事件循环的Tick来说，Node的事件循环更复杂，它也分为微任务和宏任务：

宏任务（macrotask）：setTimeout、setInterval、IO事件、setImmediate、close事件

微任务（microtask）：Promise的then回调、process.nextTick、queueMicrotask

但是，Node中的事件循环不只是 微任务队列和 宏任务队列：

微任务队列：next tick queue：process.nextTick，other queue：Promise的then回调、queueMicrotask

宏任务队列：timer queue：setTimeout、setInterval，poll queue：IO事件，check queue：setImmediate，close queue：close事件

### 9.4 **Node事件循环的顺序**

在每一次事件循环的tick中，会按照如下顺序来执行代码：

next tick microtask queue

other microtask queue

timer queue

poll queue

check queue

close queue

## 十、**事件循环的相关代码**

```javascript
// 1.Promise
setTimeout(function () {
  console.log("setTimeout1");         
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");        
    });
    console.log("then2");        
  });
});

new Promise(function (resolve) {
  console.log("promise1");    
  resolve();
}).then(function () {
  console.log("then1");      
});

setTimeout(function () {
  console.log("setTimeout2");     
});

console.log(2);      

queueMicrotask(() => {
  console.log("queueMicrotask1")       
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");          
});
// promise1
// 2
// then1
// queueMicrotask1
// then3
// setTimeout1    
// then2
// then4
// setTimeout2


// 2.promise async await
async function async1 () {
  console.log('async1 start')      
  await async2();
  console.log('async1 end')         
}

async function async2 () {
  console.log('async2')          
  // 其实是 return undefined Promise 对象
}

console.log('script start')          

setTimeout(function () {
  console.log('setTimeout')           
}, 0)
 
async1();
 
new Promise (function (resolve) {
  console.log('promise1')         
  resolve();
}).then (function () {
  console.log('promise2')        
})

console.log('script end')          

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout


// 3.Promise较难
Promise.resolve().then(() => {
  console.log(0);
  // 1.直接return一个值 相当于resolve(4)
  // return 4

  // 2.return thenable的值
  // return {
  //   then: function(resolve) {
  //     // 大量的计算
  //     resolve(4)
  //   }
  // }

  // 3.return Promise
  // 不是普通的值, 多加一次微任务
  // Promise.resolve(4), 多加一次微任务
  // 一共多加两次微任务
  return Promise.resolve(4)
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})

// 1.return 4
// 0
// 1
// 4
// 2
// 3
// 5
// 6

// 2.return thenable
// 0
// 1
// 2
// 4
// 3
// 5
// 6

// 3.return promise
// 0
// 1
// 2
// 3
// 4
// 5
// 6


// 4. node
async function async1() {
  console.log('async1 start')      
  await async2()
  console.log('async1 end')          
}

async function async2() {
  console.log('async2')       
}

console.log('script start')         

setTimeout(function () {
  console.log('setTimeout0')           
}, 0)

setTimeout(function () {
  console.log('setTimeout2')           
}, 300)

setImmediate(() => console.log('setImmediate'));         

process.nextTick(() => console.log('nextTick1'));          

async1();

process.nextTick(() => console.log('nextTick2'));        

new Promise(function (resolve) {
  console.log('promise1')         
  resolve();
  console.log('promise2')        
}).then(function () {
  console.log('promise3')          
})

console.log('script end')           


// script start
// async1 start
// async2
// promise1
// promise2
// script end
// nextTick1
// nextTick2
// async1 end
// promise3
// setTimeout0
// setImmediate
// setTimeout2
```

