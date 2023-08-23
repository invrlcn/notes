Vue.createApp({
  template: '#lcn',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
    }
  },
  computed: {
    // total
    total() {
      let totals = 0
      for(const i of this.books) {
        totals += i.price * i.count  
      }
      return totals
    },
    // 添加￥符号
    // finallyPoint() {
    //   return this.books.map(item => {
    //     const newItem = Object.assign({}, item)
    //     // console.log(newItem)
    //     const res = '￥' + newItem.price
    //     console.log(res)
    //     return res
    //   })
    // }
  },
  // 添加￥符号
  // filters  app.config.globalProperties.$filters
  // vue3已移除推荐使用计算属性
  // filters: {
  //   filter() {
  //     return '￥'
  //   } 
  // },
  methods: {
    // add
    add(index) {
      this.books[index].count++
    },
    // minus
    minus(index) {
      this.books[index].count--
    },
    // removeBook
    removeBook(index) {
      this.books.splice(index, 1)
    },
    // 添加￥符号
    point(price) {
      return '￥' + price
    }
  }
}).mount('#app')