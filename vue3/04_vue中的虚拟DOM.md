# 虚拟DOM操作

## 一、**认识VNode**

我们先来解释一下VNode的概念： 

VNode的全称是Virtual Node，也就是虚拟节点； 事实上，**无论是组件还是元素，它们最终在Vue中表示出来的都是一个个VNode**

**VNode的本质是一个JavaScript的对象**

```javascript
<div class="title" style="font-size: 10px; color: red;">invrlcn</div>
 const vnode = {
      type: 'div',
      props: {
        class: 'title',
        style: {
          'font-size': '10px',
          color: 'red'
        },
        children: 'invrlcn'
      }
    }
```

![](../imgs/vue3/vnode.png)

## 二、**虚拟DOM**

如果我们不只是一个简单的div，而是有一大堆的元素，那么它们应该会形成一个VNode Tree：

```javascript
<div>
      <p>
        <i>哈哈哈</i>
        <i>哈哈哈</i>
      </p>
      <strong>呵呵呵</strong>
      <span>嘻嘻嘻</span>
  </div>
```

![](../imgs/vue3/%E8%99%9A%E6%8B%9FDOM%E7%BB%93%E6%9E%84.png)

## 三、**插入F的案例**

我们先来看一个案例：这个案例是当我点击按钮时会在中间插入一个f

```javascript
 <template id="app">
    <ul>
      <li v-for="item in letters">{{item}}</li>
    </ul>
    <button @click="handleClick">add F</button>
  </template>
  <script src="./vue.golbal.js"></script>
  <script>
    const App = {
      template: '#app',
      data() {
        return {
          letters: ['a', 'b', 'c', 'd']
        }
      },
      methods: {
        handleClick() {
          this.letters.slice(2, 0, 'f')
        }
      }
    }
    Vue.createApp(App).mount('#app')
  </script>
```

我们可以确定的是，这次更新对于ul和button是不需要进行更新，需要更新的是我们li的列表： 

在Vue中，对于相同父元素的子元素节点并不会重新渲染整个列表

因为对于列表中 a、b、c、d它们都是没有变化的； 在操作真实DOM的时候，我们只需要在中间插入一个f的li即可

那么Vue中对于列表的更新究竟是如何操作的呢？ 

Vue事实上会对于**有key和没有key会调用两个不同的方法**

有key，那么就使用 **patchKeyedChildren方法**

没有key，那么就使用 **patchUnkeyedChildren方法**

## 四、**Vue源码对于key的判断**

![](../imgs/vue3/vue%E6%BA%90%E7%A0%81%E5%AF%B9key%E7%9A%84%E5%88%A4%E6%96%AD.png)

### 4.1 **没有key的操作（源码）**

![](../imgs/vue3/%E6%B2%A1%E6%9C%89key%E7%9A%84%E6%93%8D%E4%BD%9C%EF%BC%88%E6%BA%90%E7%A0%81%EF%BC%89.png)

**没有key的过程如下**：

我们会发现上面的diff算法效率并不高： 

c和d来说它们事实上并不需要有任何的改动； 但是因为我们的c被f所使用了，所以后续所有的内容都要一次进行改动，并且最后进行新增

![](../imgs/vue3/%E6%B2%A1%E6%9C%89key%E7%9A%84%E8%BF%87%E7%A8%8B.png)

### 4.2 **有key执行操作（源码）**

![](../imgs/vue3/%E6%9C%89key%E7%9A%84%E6%93%8D%E4%BD%9C%EF%BC%88%E6%BA%90%E7%A0%81%EF%BC%89.png)

**有key的diff算法如下：**

第一步的操作是从头开始进行遍历、比较： 

a和b是一致的会继续进行比较

c和f因为key不一致，所以就会break跳出循环

![](../imgs/vue3/%E6%9C%89key%E7%9A%84diff%E7%AE%97%E6%B3%95%EF%BC%881%EF%BC%89.png)

第二步的操作是从尾部开始进行遍历、比较：

![](../imgs/vue3/%E6%9C%89key%E7%9A%84diff%E7%AE%97%E6%B3%95%EF%BC%881.2%EF%BC%89.png)

第三步是如果旧节点遍历完毕，但是依然有新的节点，那么就新增节点：

![](../imgs/vue3/%E6%9C%89key%E7%9A%84diff%E7%AE%97%E6%B3%95%EF%BC%881.3%EF%BC%89.png)

第四步是如果新的节点遍历完毕，但是依然有旧的节点，那么就移除旧节点：

![](../imgs/vue3/%E6%9C%89key%E7%9A%84diff%E7%AE%97%E6%B3%95%EF%BC%881.4%EF%BC%89.png)

第五步是最特色的情况，中间还有很多未知的或者乱序的节点：

![](../imgs/vue3/%E6%9C%89key%E7%9A%84diff%E7%AE%97%E6%B3%95%EF%BC%881.5%EF%BC%89.png)

所以我们可以发现，Vue在进行diff算法的时候，会尽量利用我们的key来进行优化操作： 

在没有key的时候我们的效率是非常低效的； 在进行插入或者重置顺序的时候，保持相同的key可以让diff算法更加的高效