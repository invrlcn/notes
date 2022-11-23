# 使用vue

Vue的本质，就是一个JavaScript的库： 刚开始我们不需要把它想象的非常复杂； 我们就把它理解成一个已经帮助我们封装好的库； 在项目中可以引入并且使用它即可。 

那么安装和使用Vue这个JavaScript库有哪些方式呢？ 

方式一：在页面中通过CDN的方式来引入

方式二：下载Vue的JavaScript文件，并且自己手动引入

方式三：通过npm包管理工具安装使用它

方式四：直接通过Vue CLI创建项目，并且使用它

## 一、**CDN引入**

什么是CDN呢？CDN称之为**内容分发网络**（**C**ontent **D**elivery **N**etwork或**C**ontent **D**istribution **N**etwork，缩 

写：**CDN**） 

它是指通过 相互连接的网络系统，利用最靠近每个用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户；来提供高性能、可扩展性及低成本的网络内容传递给用户

常用的CDN服务器可以大致分为两种： 

自己的CDN服务器：需要购买自己的CDN服务器，目前阿里、 腾讯、亚马逊、Google等都可以购买CDN服务器

开源的CDN服务器：国际上使用比较多的是unpkg、 JSDelivr、cdnjs

![](../imgs/vue3/CDN.png)

Vue的CDN引入：

<script src="https://unpkg.com/vue@next"></script>

## 二、**下载和引入**

下载Vue的源码，可以直接打开CDN的链接： 打开链接，复制其中所有的代码； 创建一个新的文件，比如vue.js，将代码复制到其中。通过script标签，引入刚才的文件：

<script src="../js/vue.js"></script>

## 三、通过npm包管理工具下载

**npm install vue@next**

2022.3.7后vue3已结作为vue默认版本

**npm install vue**

## 四、通过vue cli脚手架创建

**vue create 文件名**

