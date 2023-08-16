## 一. **认识JSX**

![](../imgs/react/%E8%AE%A4%E8%AF%86jsx.png)

- **这段element变量的声明右侧赋值的标签语法是什么呢？**
  - 它不是一段字符串（因为没有使用引号包裹）
  - 它看起来是一段HTML元素，但是我们能在js中直接给一个变量赋值html吗？
  - 其实是不可以的，如果我们将 type="text/babel" 去除掉，那么就会出现语法错误
  - 它到底是什么呢？其实它是一段**jsx的语法**
- **JSX是什么？**
  - JSX是一种JavaScript的语法扩展（eXtension），也在很多地方称之为**JavaScript XML**，因为看起就是一段XML语法
  - 它用于描述我们的UI界面，并且其完成可以和**JavaScript融合在一起使用**
  - 它不同于Vue中的模块语法，你不需要专门学习模块语法中的一些指令（比如v-for、v-if、v-else、v-bind）

## 二. **为什么React选择了JSX**

- **React认为渲染逻辑**本质上与其他**UI逻辑存在内在耦合**
  - 比如UI需要绑定事件（button、a原生等等）
  - 比如UI中需要展示数据状态
  - 比如在某些状态发生改变时，又需要改变UI
  - 他们之间是密不可分，所以React没有将标记分离到不同的文件中，而是将它们组合到了一起，这个地方就是**组件（Component）**
  - JSX其实是嵌入到JavaScript中的一种结构语法
- **JSX的书写规范：**
  - JSX的顶层**只能有一个根元素**，所以我们很多时候会在外层包裹一个div元素（或者使用Fragment）
  - 为了方便阅读，我们通常在jsx的外层包裹一个小括号()，这样可以方便阅读，并且jsx可以进行换行书写
  - JSX中的标签可以是单标签，也可以是双标签
    - 注意：如果是单标签，必须以/>结尾

## 三. **JSX的使用**

- **jsx中的注释**

  ```html
  {/*jsx注释*/}
  ```

- **JSX嵌入变量作为子元素**

  - 情况一：当变量是Number、String、Array类型时，可以直接显示
  - 情况二：当变量是null、undefined、Boolean类型时，内容为空
    - 如果希望可以显示null、undefined、Boolean，那么需要转成字符串
    - 转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式
  - 情况三：Object对象类型不能作为子元素（not valid as a React child）

- **JSX嵌入表达式**

  - 运算表达式
  - 三元运算符
  - 执行一个函数

- **jsx绑定属性**

  - 比如元素都会有title属性
  - 比如img元素会有src属性
  -  比如a元素会有href属性
  - 比如元素可能需要绑定class
  - 比如原生使用内联样式style

## 四. **React事件绑定**



























