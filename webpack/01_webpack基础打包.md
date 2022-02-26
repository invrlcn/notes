# webpack基础打包

## 一、**认识webpack**

**事实上随着前端的快速发展，目前前端的开发已经变的越来越复杂了：** 

比如开发过程中我们需要**通过模块化的方式来开发**； 也会使用一些高级的特性来加快我们的开发效率或者安全性，比如通过**ES6+、TypeScript**开发脚本逻辑，通过**sass**、**less**等方式来编写css样式代码； 开发过程中，我们还希望**实时的监听文件的变化来并且反映到浏览器上**，提高开发的效率； 开发完成后我们还需要将**代码进行压缩、合并**以及其他相关的优化； 等等…. 

但是对于很多的**前端开发者**来说，并不需要思考这些问题，日常的开发中根本就没有面临这些问题： 这是因为目前前端开发我们通常都会直接使用三大框架来开发：**Vue、React、Angular**； 但是事实上，这三大框架的创建过程我们都是借助于**脚手架（CLI）**的； 事实上**Vue-CLI、create-react-app、Angular-CLI**都是基于**webpack**来帮助我们支持模块化、less、 TypeScript、打包优化等的

## 二、**脚手架依赖webpack**

上面提到的所有脚手架都是依赖于webpack的：

![](../imgs/webpack/%E8%84%9A%E6%89%8B%E6%9E%B6%E4%BE%9D%E8%B5%96webpack.png)

## 四、**Webpack到底是什么呢？**

**我们先来看一下官方的解释：** 

**webpack是一个静态的模块化打包工具，为现代的JavaScript应用程序** 

我们来对上面的解释进行拆解： 

**<span style='color:red'>打包bundler：</span>**webpack可以将帮助我们进行打包，所以它是一个打包工具 

<span style='color:red'>静态的static：</span>这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）

<span style='color:red'>模块化module：</span>webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等； 

<span style='color:red'>现代的modern：</span>我们前端说过，正是因为现代前端开发面临各种各样的问题，才催生了webpack的出现和发展

![](../imgs/webpack/webpack%E5%AE%98%E6%96%B9%E5%9B%BE%E7%89%87.png)

## 五、**Vue项目加载的文件有哪些呢？**

**JavaScript的打包：** 

将ES6转换成ES5的语法 

**TypeScript的处理**，将其转换成JavaScript

**Css的处理：** 

CSS文件模块的加载、提取

**Less、Sass等预处理器的处理**

**资源文件img、font：** 

图片img文件的加载； 字体font文件的加载

**HTML资源的处理：** 

打包HTML资源文件

**处理vue项目的SFC文件.vue文件**

## 六、**Webpack的使用前提**

webpack的官方文档是https://webpack.js.org/ 

pwebpack的中文官方文档是https://webpack.docschina.org/ 

DOCUMENTATION：文档详情，也是我们最关注的 

Webpack的运行是依赖**Node**环境的，所以我们电脑上必须有Node环境，我们需要先安装Node.js，并且同时会安装npm

Node官方网站：https://nodejs.org/

## 七、**Webpack的安装**

webpack的安装目前分为两个：**<span style='color:red'>webpack、webpack-cli</span>**

**那么它们是什么关系呢？** 

**执行webpack命令，会执行node_modules下的.bin目录下的webpack**

**webpack在执行时是依赖webpack-cli的**，如果没有安装就会报错； **而webpack-cli中代码执行时，才是真正利用webpack进行编译和打包的过程**； 所以在安装webpack时，我们需要同时安装webpack-cli（第三方的脚手架事实上是没有使用webpack-cli的，而是类似于自己的vue-service-cli的东西）

![](../imgs/webpack/webpack%E5%8F%8Awebpack-cli%E5%85%B3%E7%B3%BB.png)

**<span style='color:red'>npm install webpack webpack-cli –g # 全局安装</span>** 

**<span style='color:red'>npm install webpack webpack-cli –D # 局部安装</span>**

## 八、**Webpack的默认打包**

我们可以通过webpack进行打包，之后运行打包之后的代码在目录下直接执行 **webpack** 命令 

**生成一个dist文件夹，里面存放一个main.js的文件，就是我们打包之后的文件：** 

这个文件中的代码被压缩和丑化了； 另外我们发现代码中依然存在ES6的语法，比如箭头函数、const等，这是因为默认情况下webpack并不清楚我们打包后的文件是否需要转成ES5之前的语法，后续我们需要通过**babel**来进行转换和设置

**我们发现是可以正常进行打包的，但是有一个问题，webpack是如何确定我们的入口的呢？** 

事实上，当我们运行webpack时，**webpack会查找当前目录下的 src/index.js作为入口**，所以，如果当前项目中没有存在src/index.js文件，那么会报错； **当然，我们也可以通过配置来指定入口和出口**

**<span style='color:red'>npx webpack --entry ./src/main.js --output-path ./build</span>**

### 8.1 **创建局部的webpack**

前面我们直接执行webpack命令使用的是全局的webpack，如果希望使用局部的可以按照下面的步骤来操作。 

第一步：创建**package.json**文件，用于管理项目的信息、库依赖等 

**<span style='color:red'>npm init</span>**

第二步：安装局部的webpack 

**<span style='color:red'>npm install webpack webpack-cli -D</span>**

第三步：使用局部的webpack 

**<span style='color:red'>npx webpack</span>**

第四步：在package.json中创建**scripts**脚本，执行脚本打包即可

```javascript
"scripts": {
  "build": "webpack"
}
```

**<span style='color:red'>npm run build</span>**

### 8.2 **Webpack配置文件**

在通常情况下，webpack需要打包的项目是非常复杂的，并且我们需要一系列的配置来满足要求，默认配置必然是不可以的。 我们可以在根目录下创建一个**webpack.config.js**文件，来作为webpack的配置文件：

```javascript
const path = require('path')

// 导出配置信息
module.esports = {
  entry: './src/main.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__driname, './dist')
  }
}
```

继续执行webpack命令，依然可以正常打包: **npm run build**

### 8.3 **指定配置文件**

但是如果我们的配置文件并不是webpack.config.js的名字，而是其他的名字呢？ 

比如我们将webpack.config.js修改成了 wk.config.js； 这个时候我们可以通过 --config 来指定对应的配置文件

**<span style='color:red'>webpack --config wk.config.js</span>**

但是每次这样执行命令来对源码进行编译，会非常繁琐，所以我们可以在package.json中增加一个新的脚本：之后我们执行 **npm run build** 来打包即可

```javascript
{
  "scripts": {
     "build": "webpack --config wk.config.js"
  },
  "devDependencies": {
     "webpack": "^5.14.0",
     "webpack-cli": "^4.3.1"
  }
}
```

### 8.4 **Webpack的依赖图**

webpack到底是如何对我们的项目进行打包的呢？ 

事实上webpack在处理应用程序时，它会根据命令或者配置文件找到入口文件； 从入口开始，会生成一个 **依赖关系图**，这个依赖关系图会**包含应用程序中所需的所有模块（比如.js文件、css文件、图片、字体等）**； 然后**遍历图结构，打包一个个模块（根据文件的不同使用不同的loader来解析）**

![](../imgs/webpack/webpack%E5%AE%98%E6%96%B9%E5%9B%BE%E7%89%87.png)

