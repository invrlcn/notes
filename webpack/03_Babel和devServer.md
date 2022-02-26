# Babel和devServer

## 一、**babel**

### 1.1 **为什么需要babel？**

事实上，在开发中我们很少直接去接触babel，但是**babel对于前端开发**来说，目前是**不可缺少的一部分**： 开发中，我们想要使用ES6+的语法，想要使用TypeScript，开发React项目，它们都是离不开Babel的； 所以，学习Babel对于我们理解代码从编写到线上的转变过程至关重要； 

**那么，Babel到底是什么呢？** 

**Babel是一个工具链，主要用于旧浏览器或者环境中将ECMAScript 2015+代码转换为向后兼容版本的 JavaScript； 包括：语法转换、源代码转换**等

```javascript
[1, 2, 3].map(n => n + 1)

[1, 2, 3].map(function(n) {
  return n +1
})
```

### 1.2 **Babel命令行使用**

babel本身可以作为**一个独立的工具**（和postcss一样），不和webpack等构建工具配置来单独使用。 如果我们希望在命令行尝试使用babel，需要安装如下库： 

**@babel/core**：babel的核心代码，必须安装

**@babel/cli**：可以让我们在命令行使用babel

**<span style='color:red'>npm install @babel/core @babel/cli -D</span>**

使用babel来处理我们的源代码： 

src：是源文件的目录

--out-dir：指定要输出的文件夹dist

**<span style='color:red'>npx babel src --out-dir dist</span>**

### 1.3 **插件的使用**

比如我们需要转换箭头函数，那么我们就可以使用**箭头函数转换相关的插件**：

**<span style='color:red'>npm install @babel/plugin-transform-arrow-functions -D</span>**

**<span style='color:red'>npx install src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions</span>**

查看转换后的结果：我们会发现 const 并没有转成 var ，这是因为 **plugin-transform-arrow-functions**，并没有提供这样的功能； 我们需要使用 **plugin-transform-block-scoping** 来完成这样的功能

**<span style='color:red'>npm install @babel/plugin-transform-block-scoping -D</span>**

**<span style='color:red'>npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping ,@babel/plugin-transform-arrow-functions</span>**

### 1.4 **Babel的预设preset**

但是如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）： 

**安装@babel/preset-env预设：**

**<span style='color:red'>npm install @babel/preset-env -D</span>**

执行如下命令：

**<span style='color:red'>npx babel src --out-dir dist --presets=@babel/preset-env</span>**

### 1.5 **Babel的底层原理**

Babel的执行阶段 

![](../imgs/webpack/babel%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5.png)

当然，这只是一个简化版的编译器工具流程，在每个阶段又会有自己具体的工作：

![](../imgs/webpack/babel%E6%89%A7%E8%A1%8C%E8%AF%A6%E7%BB%86%E9%98%B6%E6%AE%B5.png)

### 1.6 **babel-loader**

在实际开发中，我们通常会在构建工具中通过配置babel来对其进行使用的，比如在webpack中。 

那么我们就需要去安装相关的依赖： 

如果之前已经安装了@babel/core，那么这里不需要再次安装

**<span style='color:red'>npm install babel-loader @babel/core -D</span>**

我们可以设置一个规则，在加载js文件时，使用我们的babel：

**必须指定使用的插件才会生效**

```javascript
module: {
  rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
             plugins: [
                 '@babel/plugin-transform-arrow-functions',
                 '@babel/plugin-transform-block-scoping'
             ]
          }
        }
      }
  ]
}
```

### 1.7 **babel-preset**

如果我们一个个去安装使用插件，那么需要手动来管理大量的babel插件，我们可以直接给webpack提供一个preset，webpack会根据我们的预设来加载对应的插件列表，并且将其传递给babel。 

比如常见的预设有三个： 

**env** 

**react** 

**TypeScript** 

安装preset-env：

**<span style='color:red'>npm install @babel/preset-env -D</span>**

```javascript
{
  test: /\.m?js$/,
  use: {
     loader: 'babel-loader',
     options: {
         presets: [
            ['@babel/preset-env']
         ]
     }
  }
}
```

### 1.8 **Babel的配置文件**

像之前一样，我们可以将babel的配置信息放到一个独立的文件中，b**abel给我们提供了两种配置文件的编写**：

 **babel.config.json（或者.js，.cjs，.mjs）文件**

**.babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件**

它们两个有什么区别呢？目前很多的项目都采用了多包管理的方式（babel本身、element-plus、umi等）

.babelrc.json：早期使用较多的配置方式，但是对于配置Monorepos项目是比较麻烦的

babel.config.json（babel7）：可以直接作用于Monorepos项目的子包，**更加推荐**

```javascript
module.exports = {
  presets: [
     ['@babel/preset-env']
  ]
}
```

## 二、**Vue源码的打包**

### 2.1 **Vue打包后不同版本解析**

**vue(.runtime).global(.prod).js：** 

通过浏览器中的 <script src="..."> 直接使用。通过CDN引入和下载的Vue版本就是这个版本。会暴露一个全局的Vue来使用

**vue(.runtime).esm-browser(.prod).js：** 

用于通过原生 ES 模块导入使用 (在浏览器中通过 <script type="module"> 来使用)

 **vue(.runtime).esm-bundler.js：** 

用于 webpack，rollup 和 parcel 等构建工具； 构建工具中默认是**vue.runtime.esm-bundler.js**，**如果我们需要解析模板template，那么需要手动指定vue.esm-bundler.js**

**vue.cjs(.prod).js：** 

服务器端渲染使用； 通过require()在Node.js中使用

## 三、**运行时+编译器 vs 仅运行时**

在Vue的开发过程中我们有**三种方式**来编写DOM元素： 

**方式一：template模板的方式（之前经常使用的方式）**

**方式二：render函数的方式，使用h函数来编写渲染的内容**

**方式三：通过.vue文件中的template来编写模板**

**它们的模板分别是如何处理的呢？** 

方式二中的h函数可以直接返回一个**虚拟节点**，也就是**Vnode节点**

方式一和方式三的template都需要有特定的代码来对其进行解析

方式三.vue文件中的template可以通过在vue-loader对其进行编译和处理

方式一种的template我们必须要通过源码中一部分代码来进行编译

所以，Vue在让我们选择版本的时候分为 **运行时+编译器** vs **仅运行时** 

**运行时+编译器包含了对template模板的编译代码，更加完整，但是也更大一些**

**仅运行时没有包含对template版本的编译代码，相对更小一些**

## 四、**VSCode对SFC文件的支持**

真实开发中多数情况下我们都是使用**SFC**（ **single-file components (单文件组件)** ）

VSCode对SFC的支持： 

插件一：**Vetur**，从Vue2开发就一直在使用的VSCode支持Vue的插件

插件二：**Volar**，官方推荐的插件（后续会基于Volar开发官方的VSCode插件）

## 五、**App.vue的打包过程**

我们对代码打包会报错：我们需要合适的Loader来处理文件

![](../imgs/webpack/vue%E6%96%87%E4%BB%B6%E6%89%93%E5%8C%85%E6%8A%A5%E9%94%99.png)

这个时候我们需要使用vue-loader：

**<span style='color:red'>npm install vue-loader -D</span>**

在webpack的模板规则中进行配置：

```javascript
{
  test: /\.vue$/,
  use: {loader: 'vue-loader'}
}
```

### 5.1 **@vue/compiler-sfc**

打包依然会报错，这是因为我们必须添加**@vue/compiler-sfc来对template进行解析**：

**<span style='color:red'>npm install @vue/vompiler-sfc -D</span>**

另外我们需要配置对应的Vue插件：

```javascript
const { VueLoaderPlugin } = require('vue-olader/dist/index')

plugins: [
  new VueLoaderPlugin()
]
```

重新打包即可支持App.vue的写法。另外，我们也可以编写其他的.vue文件来编写自己的组件

## 六、**devServer**

### 6.1 **为什么要搭建本地服务器？**

目前我们开发的代码，为了运行需要有两个操作： 

**操作一：npm run build，编译相关的代码** 

**操作二：通过live server或者直接通过浏览器，打开index.html代码，查看效果**

这个过程经常操作会影响我们的开发效率，我们希望可以做到，**当文件发生变化时，可以自动的完成 编译 和 展示**

为了完成自动编译，webpack提供了几种可选的方式： 

**webpack watch mode**

**webpack-dev-server（常用）**

**webpack-dev-middleware**

### 6.2 **Webpack watch**

webpack给我们提供了watch模式： 

**在该模式下，webpack依赖图中的所有文件，只要有一个发生了更新，那么代码将被重新编译**，**我们不需要手动去运行 npm run build指令了**

如何开启watch呢？两种方式： 

**方式一：在导出的配置中，添加 watch: true**

**方式二：在启动webpack的命令中，添加 --watch的标识**

这里我们选择方式二，在package.json的 scripts 中添加一个 watch 的脚本：

```javascript
"scripts": {
  "watch": "webpack --watch"
}
```

### 6.3 **webpack-dev-server**

上面的方式可以监听到文件的变化，但是事实上它**本身是没有自动刷新浏览器的功能的**： 当然，目前我们可以在VSCode中使用live-server来完成这样的功能； 但是，我们希望在不适用live-server的情况下，可以具备**live reloading（实时重新加载）的功能**； 安装webpack-dev-server

**<span style='color:red'>npm install webpack-dev-server -D</span>**

修改配置文件，告知 dev server，从什么位置查找文件：

```javascript
devServer: {
  contentBase: './build'
}
```

webpack-dev-server **在编译之后不会写入到任何输出文件**。而是将 bundle 文件保留在内存中： 事实上webpack-dev-server使用了一个库叫**memfs**（memory-fs webpack自己写的）

## 七、**模块热替换（HMR）**

### 7.1 **什么是HMR呢？** 

HMR的全称是**Hot Module Replacement**，翻译为模块热替换； 

模块热替换是指在 **应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面**

HMR通过如下几种方式，来提高开发的速度： 

不重新加载整个页面，这样可以保留某些应用程序的状态不丢失

只更新需要变化的内容，节省开发的时间

修改了css、js源代码，会立即在浏览器更新，相当于直接在浏览器的devtools中直接修改样式

如何使用HMR呢？ 

默认情况下，webpack-dev-server已经支持HMR，我们只需要开启即可

在不开启HMR的情况下，当我们修改了源代码之后，**整个页面会自动刷新，使用的是live reloading**

### 7.2 **开启HMR**

修改webpack的配置：

```javascript
devServer: {
  hot: true
}
```

浏览器可以看到如下效果：

![](../imgs/webpack/%E5%BC%80%E5%90%AFHMR.png)

但是你会发现，当我们修改了某一个模块的代码时，依然是刷新的整个页面： 

这是因为**我们需要去指定哪些模块发生更新时，进行HMR**

```javascript
if(module.hot) {
  module.hot.accept('./util.js', () => {
      console.log('util更新了')
  })
}
```

### 7.3 **框架的HMR**

有一个问题：在开发其他项目时，我们是否需要经常手动去写入 module.hot.accpet相关的API呢？ 

比如开发Vue、React项目，我们修改了组件，希望进行热更新，这个时候应该如何去操作呢？ 

事实上社区已经针对这些有很成熟的解决方案了： 

vue开发中，我们使用**vue-loader**，此loader支持vue组件的HMR，提供开箱即用的体验； 

react开发中，有**React Hot Loader**，实时调整react组件（目前React官方已经弃用了，改成使用react-refresh）

### 7.4 **HMR的原理**

那么HMR的原理是什么呢？如何可以做到只更新一个模块中的内容呢？ 

**webpack-dev-server会创建两个服务：提供静态资源的服务（express）和Socket服务（net.Socket）**； 

express server负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）

**HMR Socket Server，是一个socket的长连接：** 

**长连接有一个最好的好处是建立连接后双方可以通信（服务器可以直接发送文件到客户端）**，**当服务器监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）**； 通过长连接，可以直接将这两个文件主动发送给客户端（浏览器）； 浏览器拿到两个新的文件后，通过**HMR runtime机制**，加载这两个文件，并且针对修改的模块进行更新

### 7.5 **HMR的原理图**

![](../imgs/webpack/HMR%E5%8E%9F%E7%90%86%E5%9B%BE.png)

## 八、**devServer中的其他配置**

### 81. **hotOnly、host配置**

**host设置主机地址：** **默认值是localhost**

如果希望其他地方也可以访问，可以设置为 **0.0.0.0**

localhost 和 0.0.0.0 的区别： 

**localhost：本质上是一个域名，通常情况下会被解析成127.0.0.1**

127.0.0.1：**回环地址(Loop Back Address)**，表达的意思其实是我们主机自己发出去的包，直接被自己接收

**正常的数据库包经常 应用层 - 传输层 - 网络层 - 数据链路层 - 物理层** ，**而回环地址，是在网络层直接就被获取到了，是不会经过数据链路层和物理层的**

比如我们监听 127.0.0.1时，在同一个网段下的主机中，通过ip地址是不能访问的

**0.0.0.0：监听IPV4上所有的地址，再根据端口找到不同的应用程序**

比如我们监听 0.0.0.0时，在同一个网段下的主机中，通过ip地址是可以访问的

### 8.2 **port、open、compress**

**port设置监听的端口，默认情况下是8080** 

**open是否打开浏览器**： 

默认值是false，设置为true会打开浏览器。也可以设置为类似于 Google Chrome等值

**compress是否为静态文件开启gzip compression** 

默认值是false，可以设置为true

![](../imgs/webpack/compress%E5%BC%80%E5%90%AFgzip.png)

### 8.3 **Proxy**

proxy是我们开发中非常常用的一个配置选项，它的**目的设置代理来解决跨域访问的问题**

比如我们的一个api请求是 http://localhost:8888，但是本地启动服务器的域名是 http://localhost:8000，这个时候发送网络请求就会出现跨域的问题；**那么我们可以将请求先发送到一个代理服务器，代理服务器和API服务器没有跨域的问题，就可以解决我们的跨域问题了**

我们可以进行如下的设置： 

**target**：表示的是代理到的目标地址，比如 /api-hy/moment会被代理到 http://localhost:8888/api-hy/moment

**pathRewrite**：默认情况下，我们的 /api-hy 也会被写入到URL中，如果希望删除，可以使用pathRewrite

**secure**：默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false

**changeOrigin**：它表示是否更新代理后请求的headers中host地址

### 8.4 **changeOrigin的解析**

这个 changeOrigin官方说的非常模糊，通过查看源码我发现其实是要修改代理请求中的headers中的host属性：

因为我们真实的请求，其实是需要通过 http://localhost:8888来请求的； 但是因为使用了代码，默认情况下它的值时 http://localhost:8000； 如果我们需要修改，那么可以将changeOrigin设置为true即可

### 8.5 **historyApiFallback**

**historyApiFallback是开发中一个非常常见的属性，它主要的作用是解决SPA页面在路由跳转之后，进行页面刷新时，返回404的错误**。 

**boolean值**：默认是false 

如果设置为true，那么在刷新时，返回404错误时，会自动返回 index.html 的内容

**object类型的值**，可以配置rewrites属性： 可以配置from来匹配路径，决定要跳转到哪一个页面，事实上devServer中实现historyApiFallback功能是通过connect-history-api-fallback库的： 

可以查看

[historyApiFallback]: connect-history-api-fallback

文档

## 九、**resolve模块**

### 9.1 **resolve模块解析**

**resolve用于设置模块如何被解析**： 

在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库； resolve可以帮助webpack从每个 **require/import** 语句中，**找到需要引入到合适的模块代码**； webpack 使用 **enhanced-resolve** 来解析文件路径； 

**webpack能解析三种文件路径：** 

**绝对路径** ：由于已经获得文件的绝对路径，因此不需要再做进一步解析

**相对路径** ：在这种情况下，使用 import 或 require 的资源文件所处的目录，被认为是上下文目录； 在 import/require 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径

**模块路径** ：在 resolve.modules中指定的所有目录检索模块； 默认值是 ['node_modules']，所以默认会从node_modules中查找文件； 我们可以通过**设置别名的方式**来替换初识模块路径

### 9.2 **确实文件还是文件夹**

如果是一个文件： 

如果文件具有扩展名，则直接打包文件； 否则，将使用 **resolve.extensions**选项作为文件扩展名解析

如果是一个文件夹： 

会在文件夹中根据 **resolve.mainFiles**配置选项中指定的文件顺序查找； resolve.mainFiles的默认值是 **['index']**； 再根据 resolve.extensions来解析扩展名

### 9.3 **extensions和alias配置**

**extensions是解析到文件时自动添加扩展名**： 

默认值是 ['.wasm', '.mjs', '.js', '.json']； 所以如果我们代码中想要添加加载 .vue 或者 jsx 或者 ts 等文件时，我们必须自己写上扩展名

另一个非常好用的功能是**配置别名alias**： 

特别是当我们项目的目录结构比较深的时候，或者一个文件的路径可能需要 ../../../这种路径片段； 我们可以给某些常见的路径起一个别名

```javascript
resolve: {
  extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.vue', '.ts'],
  alias: {
   	'@': resolveApp('./src'),
    'pages': resolveApp('./src/pages')
  }
}
```

## 十、**如何区分开发环境**

目前我们所有的webpack配置信息都是放到一个配置文件中的：**webpack.config.js** 

当配置越来越多时，这个文件会变得越来越不容易维护； 并且某些配置是在开发环境需要使用的，某些配置是在生成环境需要使用的，当然某些配置是在开发和生成环境都会使用的； 所以，我们最好对配置进行划分，方便我们维护和管理

那么，在启动时如何可以区分不同的配置呢？ 

**方案一：编写两个不同的配置文件，开发和生成时，分别加载不同的配置文件即可**

**方式二：使用相同的一个入口配置文件，通过设置参数来区分它们**

```javascript
"scripts": {
  "serve": "webpack serve --config ./config/common.config",
  "build": "webpack --config ./config/common.config --env prodution"
}
```

## 十一、**入口文件解析**

我们之前编写入口文件的规则是这样的：./src/index.js，但是如果我们的配置文件所在的位置变成了 config 目录

我们是否应该变成 ../src/index.js呢？ 

如果我们这样编写，会发现是报错的，依然要写成 ./src/index.js，这是因为入口文件其实是和另一个属性时有关的 context

**context的作用是用于解析入口（entry point）和加载器（loader）**

官方说法：默认是当前路径（但是经过我测试，默认应该是webpack的启动目录） ，另外推荐在配置中传入一个值

```javascript
// context是配置文件所在的目录
module.exports = {
  context: path.resolve(__dirname, './'),
  entry: '../src/index.js'
}

// context是上一个目录
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.js'
}
```

