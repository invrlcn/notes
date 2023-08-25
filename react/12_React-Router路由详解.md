## 一. **认识react-router**

- **目前前端流行的三大框架, 都有自己的路由实现:**

  - Angular的ngRouter
  - React的ReactRouter
  - Vue的vue-router

- **React Router在最近两年版本更新的较快，并且在最新的React Router6.x版本中发生了较大的变化**

  - 目前React Router6.x已经非常稳定，我们可以放心的使用

- **安装React Router：**

  - 安装时，我们选择react-router-dom

  - react-router会包含一些react-native的内容，web开发并不需要

    - ```shell
      npm i react-router-dom
      #或
      yarn react-router-dom
      ```



## 二. **Router的基本使用**

- **react-router最主要的API是给我们提供的一些组件：**
- **BrowserRouter或HashRouter**
  - Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件
  - BrowserRouter使用history模式
  -  HashRouter使用hash模式

![](../imgs/react/router%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.png)

## 三. **路由映射配置**

- **Routes：包裹所有的Route，在其中匹配一个路由**
  - Router5.x使用的是Switch组件
- **Route：Route用于路径的匹配**
  - path属性：用于设置匹配到的路径
  - element属性：设置匹配到路径后，渲染的组件
  - Router5.x使用的是component属性
  - exact：精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件
    - Router6.x不再支持该属性

![](../imgs/react/router%E6%98%A0%E5%B0%84%E8%A1%A8.png)



## **四. 路由配置和跳转**

- **Link和NavLink：**
  - 通常路径的跳转是使用Link组件，最终会被渲染成a元素
  - to属性：Link中最重要的属性，用于设置跳转到的路径
  - NavLink是在Link基础之上增加了一些样式属性
    - 当前元素选中时 会添加className:  **active** 



## 五. **Navigate导航**

- **Navigate****用于路由的重定向，当这个组件出现时，就会执行跳转到对应的to路径中**

![](../imgs/react/Navigate%E9%87%8D%E5%AE%9A%E5%90%91.png)



## 六. **Not Found页面配置**

- **如果用户随意输入一个地址，该地址无法匹配，那么在路由匹配的位置将什么内容都不显示**
- **很多时候，我们希望在这种情况下，让用户看到一个Not Found的页面**
  - 开发一个Not Found页面
  - 配置对应的Route，并且设置path为*即可

![](../imgs/react/notFound%E9%A1%B5%E9%9D%A2.png)



## 七. **路由的嵌套**

- **在开发中，路由之间是存在嵌套关系的**
- **注意:** 
  - **<Outlet>组件用于在父路由元素中作为子路由的占位元素**

![](../imgs/react/%E8%B7%AF%E7%94%B1%E5%B5%8C%E5%A5%97(1).png)

![](../imgs/react/%E8%B7%AF%E7%94%B1%E5%B5%8C%E5%A5%97(2).png)



## 八. **手动路由的跳转**

- **目前我们实现的跳转主要是通过Link或者NavLink进行跳转的，实际上我们也可以通过****JavaScript代码****进行跳转**
- Navigate组件是可以进行路由的跳转的，但是依然是组件的方式
- 如果我们希望通过JavaScript代码逻辑进行跳转（比如点击了一个button），那么就需要获取到**navigate对象**
- **在Router6.x版本之后，代码类的API都迁移到了hooks的写法：**
  - 如果我们希望进行代码跳转，需要通过useNavigate的Hook获取到navigate对象进行操作
  - 那么如果是一个函数式组件，我们可以直接调用，但是如果是一个类组件呢？
    - 我们需要写一个**高阶组件(hoc)**

![](../imgs/react/withRouter(1).png)

![](../imgs/react/withRouter(2).png)



## 九. **路由参数传递**

- **传递参数有二种方式：**
  - 动态路由的方式
  - search传递参数
- **动态路由的概念指的是路由中的路径并不会固定：**
  - 比如/detail的path对应一个组件Detail
  - 如果我们将path在Route匹配时写成/detail/:id，那么 /detail/abc、/detail/123都可以匹配到该Route，并且进行显示
  - 这个匹配规则，我们就称之为**动态路由**
  - 通常情况下，使用动态路由可以为路由传递参数

![](../imgs/react/%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1(1).png)

![](../imgs/react/%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1(2).png)

![](../imgs/react/%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1(3).png)

- **search传递参数**

![](../imgs/react/search%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0(1).png)

![](../imgs/react/search%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0(2).png)



## 十. **路由的配置文件**

- **目前我们所有的路由定义都是直接使用Route组件，并且添加属性来完成的**
- **但是这样的方式会让路由变得非常混乱，我们希望将所有的路由配置放到一个地方进行集中管理：**
  - 在早期的时候，Router并且没有提供相关的API，我们需要借助于react-router-config完成
  - 在Router6.x中，为我们提供了useRoutes API可以完成相关的配置

![](../imgs/react/%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6(1).png)

![](../imgs/react/%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6(2).png)

- **如果我们对某些组件进行了异步加载（懒加载），那么需要使用Suspense进行包裹：**

![](../imgs/react/%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6(3).png)