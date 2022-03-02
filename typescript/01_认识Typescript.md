# 认识Typescript

## 一、**使用Typescript的背景**

### 1.1 **JavaScript一门优秀的语言**

**我始终相信：任何新技术的出现都是为了解决原有技术的某个痛点。** 

**JavaScript是一门优秀的编程语言吗？** 

每个人可能观点并不完全一致，但是从很多角度来看，JavaScript是一门非常优秀的编程语言； 而且，可以说在很长一段时间内这个语言不会被代替，并且会在更多的领域被大家广泛使用； **著名的Atwood定律：** 

Stack Overflow的创立者之一的 **Jeff Atwood** 在2007年提出了著名的 **Atwood定律**。 any application that can be written in JavaScript, will eventually be written in JavaScript. **任何可以使用JavaScript来实现的应用都最终都会使用JavaScript实现。** 

其实我们已经看到了，这句话正在一步步被应验： 

Web端的开发我们一直都是使用JavaScript

移动端开发可以借助于ReactNative、Weex、Uniapp等框架实现跨平台开发

小程序端的开发也是离不开JavaScript

桌面端应用程序我们可以借助于Electron来开发

服务器端开发可以借助于Node环境使用JavaScript来开发

### 1.2 **JavaScript的痛点**

并且随着近几年前端领域的快速发展，让JavaScript迅速被普及和受广大开发者的喜爱，借助于JavaScript本身的强大，也让使用JavaScript开发的人员越来越多。 

**优秀的JavaScript没有缺点吗？** 

其实上由于各种历史因素，JavaScript语言本身存在很多的缺点； 比如ES5以及之前的使用的var关键字关于作用域的问题； 比如最初JavaScript设计的数组类型并不是连续的内存空间； 比如直到今天JavaScript也没有加入类型检测这一机制

**JavaScript正在慢慢变好** 

不可否认的是，JavaScript正在慢慢变得越来越好，无论是从底层设计还是应用层面。 ES6、7、8等的推出，每次都会让这门语言更加现代、更加安全、更加方便。 但是知道今天，JavaScript在**类型检测**上依然是毫无进展

### 1.3 **类型带来的问题**

首先你需要知道，编程开发中我们有一个共识：**错误出现的越早越好** ，能在**写代码的时候**发现错误，就不要在**代码编译时**再发现（IDE的优势就是在代码编写过程中帮助我们发现错误）。 能在**代码编译期间**发现错误，就不要在**代码运行期间**再发现（类型检测就可以很好的帮助我们做到这一点）。 能在**开发阶段**发现错误，就不要在测试期间发现错误，能在**测试期间**发现错误，就不要在上线后发现错误。 现在我们想探究的就是如何在 **代码编译期间** 发现代码的错误： 

JavaScript可以做到吗？不可以，我们来看下面这段经常可能出现的代码问题

![](../imgs/typescript/%E7%B1%BB%E5%9E%8B%E5%B8%A6%E6%9D%A5%E7%9A%84%E9%97%AE%E9%A2%98.png)

### 1.4 **类型错误**

**这是我们一个非常常见的错误：** 

这个错误很大的原因就是因为**JavaScript没有对我们传入的参数进行任何的限制**，只能等到运行期间才发现这个错误； 并且当这个错误产生时，**会影响后续代码的继续执行**，也就是整个项目都因为一个小小的错误而深入崩溃

**当然，你可能会想：我怎么可能犯这样低级的错误呢？** 

当我们写像我们上面这样的简单的demo时，这样的错误很容易避免，并且当出现错误时，也很容易检查出来； 但是当我们开发一个大型项目时呢？你能保证自己一定不会出现这样的问题吗？而且如果我们是调用别人的类库，又如何知道让我们传入的到底是什么样的参数呢？ 

但是，如果我们可以给**JavaScript加上很多限制**，在开发中就可以很好的避免这样的问题了： 比如我们的getLength函数中str是一个必传的类型，没有调用者没有传编译期间就会报错； 比如我们要求它的必须是一个String类型，传入其他类型就直接报错； 那么就可以知道**很多的错误问题在编译期间就被发现，而不是等到运行时再去发现和修改**

### 1.5 **类型思维的缺失**

我们已经简单体会到没有类型检查带来的一些问题，JavaScript因为从设计之初就没有考虑类型的约束问题，所以造成了前端开发人员关于**类型思维的缺失**： 

**前端开发人员**通常不关心变量或者参数是什么类型的，如果在必须确定类型时，我们往往需要使用各种判断验证； 从其他方向转到前端的人员，也会因为没有类型约束，而**总是担心自己的代码不安全，不够健壮**； 所以我们经常会说**JavaScript不适合开发大型项目**，因为当项目一旦庞大起来，这种宽松的类型约束会带来非常多的安全隐患，多人员开发它们之间也没有**良好的类型契约**。 

比如当我们去实现一个核心类库时，如果没有类型约束，那么需要对别人传入的参数进行各种验证来保证我们代码的健壮性； 比如我们去调用别人的函数，对方没有对函数进行任何的注释，我们只能去看里面的逻辑来理解这个函数需要传入什么参数，返回值是什么类型

### 1.6 **JavaScript添加类型约束**

**为了弥补JavaScript类型约束上的缺陷，增加类型约束，很多公司推出了自己的方案：** 

2014年，**Facebook推出了flow来对JavaScript进行类型检查**； 同年，**Microsoft微软也推出了TypeScript1.0版本**； 他们都致力于**为JavaScript提供类型检查**； 而现在，无疑**TypeScript已经完全胜出**： 

**Vue2.x的时候采用的就是flow来做类型检查**； **Vue3.x已经全线转向TypeScript，98.3%使用TypeScript进行了重构**； 而**Angular在很早期就使用TypeScript进行了项目重构并且需要使用TypeScript来进行开发**； 而甚至Facebook公司一些自己的产品也在使用TypeScript； **学习TypeScript不仅仅可以为我们的代码增加类型约束，而且可以培养我们前端程序员具备类型思维**

## 二、**TypeScript**

### 2.1 **认识TypeScript**

虽然我们已经知道TypeScript是干什么的了，也知道它解决了什么样的问题，但是我们还是需要全面的来认识一下TypeScript到底是什么？ 

**我们来看一下TypeScript在GitHub和官方上对自己的定义：** 

GitHub说法：TypeScript is a superset of JavaScript that compiles to clean JavaScript output. 

TypeScript官网：TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. 

翻译一下：**TypeScript是拥有类型的JavaScript超集，它可以编译成普通、干净、完整的JavaScript代码**。 

怎么理解上面的话呢？ 

**我们可以将TypeScript理解成加强版的JavaScript**。 

**JavaScript所拥有的特性，TypeScript全部都是支持的**，并且它紧随ECMAScript的标准，所以E**S6、ES7、ES8等新语法标准，它都是支持的**； **并且在语言层面上，不仅仅增加了类型约束，而且包括一些语法的扩展，比如枚举类（Enum）、元组类型（Tuple）等**； **TypeScript在实现新特性的同时，总是保持和ES标准的同步甚至是领先**； 并且**TypeScript最终会被编译成JavaScript代码**，所以你**并不需要担心它的兼容性问题**，在**编译时也不需要借助于Babel这样的工具**

所以，我们可以把TypeScript理解成更加强大的JavaScript，不仅让JavaScript更加安全，而且给它带来了诸多好用的好用特性

### 2.2 **TypeScript的特点**

官方对TypeScript有几段特点的描述，我觉得非常到位（虽然有些官方，了解一下），我们一起来分享一下： 

**始于JavaScript，归于JavaScript** 

TypeScript从今天数以百万计的JavaScript开发者所熟悉的语法和语义开始。使用现有的JavaScript代码，包括流行的JavaScript库，并从JavaScript代码中调用TypeScript代码； **TypeScript可以编译出纯净、 简洁的JavaScript代码，并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3（或更高版本）的JavaScript引擎中**

**TypeScript是一个强大的工具，用于构建大型项目** 

类型允许JavaScript开发者在开发JavaScript应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构； 类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。类型让你定义软件组件之间的接口和洞察现有JavaScript库的行为； 

**拥有先进的 JavaScript** 

TypeScript提供最新的和不断发展的JavaScript特性，包括那些来自2015年的ECMAScript和未来的提案中的特性，比如异步功能和Decorators，以帮助建立健壮的组件； 这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的ECMAScript3（或更新版本）的JavaScript

### 2.3 **众多项目采用TypeScript**

正是因为有这些特性，TypeScript目前已经在很多地方被应用： 

**Angular源码在很早就使用TypeScript来进行了重写，并且开发Angular也需要掌握TypeScript**

**Vue3源码**也采用了TypeScript进行重写

包括目前已经变成最流行的**编辑器VSCode**也是使用TypeScript来完成的

包括在**React中已经使用的ant-design的UI库**，也大量使用TypeScript来编写 

目前公司非常流行**Vue3+TypeScript、React+TypeScript的开发模式**； 

包括**小程序开发**，也是支持TypeScript的

### 2.4 **大前端的发展趋势**

大前端是一群最能或者说最需要折腾的开发者： 

客户端开发者：从Android到iOS，或者从iOS到Android，到RN，甚至现在越来越多的客户端开发者接触前端相关知识（Vue、React、Angular、小程序）

前端开发者：从jQuery到AngularJS，到三大框架并行：Vue、React、Angular，还有小程序，甚至现在也要接触客户端开发（比如RN、Flutter）

目前又面临着不仅仅学习ES的特性，还要学习TypeScript； 新框架的出现，我们又需要学习新框架的特性，比如vue3.x、react18等等

**但是每一样技术的出现都会让惊喜，因为他必然是解决了之前技术的某一个痛点的，而TypeScript真是解决JavaScript存在的很多设计缺陷，尤其是关于类型检测的。** 

并且从开发者长远的角度来看，学习TypeScript有助于我们前端程序员培养 **类型思维**，这种思维方式对于完成大型项目尤为重要

### 2.5 **TypeScript的编译环境**

在前面我们提到过，TypeScript最终会被编译成JavaScript来运行，所以我们需要搭建对应的环境： 

我们需要在电脑上安装TypeScript，这样就可以通过**TypeScript的Compiler将其编译成JavaScript**

![](../imgs/typescript/typescript%E7%9A%84%E7%BC%96%E8%AF%91%E7%8E%AF%E5%A2%83.png)

所以，我们需要先可以先进行全局的安装：

**<span style='color:red'>npm install typescript -g</span>**

查看版本

**<span style='color:red'>tsc --version</span>**

### 2.6 **TypeScript的运行环境**

如果我们每次为了查看TypeScript代码的运行效果，都通过经过两个步骤的话就太繁琐了： 

第一步：通过tsc编译TypeScript到JavaScript代码

第二步：在浏览器或者Node环境下运行JavaScript代码

是否可以简化这样的步骤呢？ 

比如编写了TypeScript之后可以直接运行在浏览器上？ 比如编写了TypeScript之后，直接通过node的命令来执行？ 

上面提到的两种方式，可以通过两个解决方案来完成： 

方式一：通过webpack，配置本地的TypeScript编译环境和开启一个本地服务，可以直接运行在浏览器上； 

方式二：通过ts-node库，为TypeScript的运行提供执行环境； 

**方式一：webpack配置** 

方式一可以自行查看对应的文章

https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw

**方式二：安装ts-node**

**<span style='color:red'>npm install ts-node -g</span>**

另外ts-node需要依赖 tslib 和 @types/node 两个包：

**<span style='color:red'>npm install tslib @types/node -g</span>**

现在，我们可以直接通过 ts-node 来运行TypeScript的代码：

**<span style='color:red'>ts-node math.ts</span>**

## 