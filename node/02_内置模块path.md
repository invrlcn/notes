## 一、**内置模块path**

- path模块用于对路径和文件进行处理，提供了很多好用的方法
- **在Mac OS、Linux和window上的路径时不一样的**
  - window上会使用 \或者 \\ 来作为文件路径的分隔符，当然目前也支持 /
  - 在Mac OS、Linux的Unix操作系统上使用 / 来作为文件路径的分隔符
- **那么如果我们在window上使用 \ 来作为分隔符开发了一个应用程序，要部署到Linux上面应该怎么办呢？**
  - 显示路径会出现一些问题
  - 所以为了屏蔽他们之间的差异，在开发中对于路径的操作我们可以使用 path 模块
- **可移植操作系统接口（英语：Portable Operating System Interface，缩写为POSIX）**
  - Linux和Mac OS都实现了POSIX接口
  - Window部分电脑实现了POSIX接口

## 二、**path常见的API**

- **从路径中获取信息**
  - dirname：获取文件的父文件夹
  - basename：获取文件名
  - extname：获取文件扩展名
- **路径的拼接：path.join**
  - 如果我们希望将多个路径进行拼接，但是不同的操作系统可能使用的是不同的分隔符
  - 这个时候我们可以使用path.join函数
- **拼接绝对路径：path.resolve**
  - path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
  - 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
  - 如果在处理完所有给定path的段之后，还没有生成绝对路径，则使用当前工作目录
  - 生成的路径被规范化并删除尾部斜杠，零长度path段被忽略
  -  如果没有path传递段，path.resolve()将返回当前工作目录的绝对路径

### 三、**在webpack中的使用**

- **在webpack中获取路径或者起别名的地方也可以使用**

  ![](../imgs/node/webpack%E4%B8%AD%E4%BD%BF%E7%94%A8path.png)