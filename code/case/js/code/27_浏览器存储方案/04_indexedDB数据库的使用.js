// 打开数据(和数据库建立连接)
  const dbRequest = indexedDB.open('invrlcn', 1)
  dbRequest.onerror = function(err) {
    console.log('打开数据库失败', err)
  }
  let db = null
  dbRequest.onsuccess = function(event) {
    db = event.target.result
  }
  // 第一次打开/或者版本发生升级
  dbRequest.onupgradeneeded = function(event) {
    const db = event.target.result

    // 创建一些存储对象
    db.createObjectStore('users', { keyPath: 'id' })
    db.createObjectStore('score', { keyPath: 'index' })
  }
  class Users {
    constructor(id, name, age) {
      this.id = id
      this.name = name
      this.age = age
    }
  }
  class Scores {
    constructor(index, course, grade) {
      this.index = index
      this.course = course
      this.grade = grade
    }
  }
  const users = [
    new Users(10, 'bob', 18),
    new Users(20, 'mary', 20),
    new Users(30, 'tom', 30)
  ]
  const scores = [
    new Scores(3, '语文', 89),
    new Scores(2, '数学', 92),
    new Scores(8, '英语', 98)
  ]
// 获取btns, 监听点击
const btns = document.querySelectorAll('button')
for(let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    const transaction1 = db.transaction('users', 'readwrite')
    const transaction2 = db.transaction('score', 'readwrite')
    const store1 = transaction1.objectStore('users')
    const store2 = transaction2.objectStore('score')
    switch(i) {
      case 0:
        console.log('点击了新增')
        // users
        for(const item of users) {
          const res = store1.add(item)
          res.onsuccess = function() {
            console.log(`${item.name}插入成功`)
          }
        }
        transaction1.oncomplete = function() {
          console.log("添加操作全部完成")
        }
        // scores
        for(const item of scores) {
          const res = store2.add(item)
          res.onsuccess = function() {
            console.log(`${item.course}插入成功`)
          }
        }
        transaction2.oncomplete = function() {
          console.log("添加操作全部完成")
        }
        break
      case 1:
        console.log('点击了查询')
        // 1.查询方式一(知道主键, 根据主键查询) store.get(key)
        // users
        // const res1 = store1.get(20)
        // res1.onsuccess = function(event) {
        //   console.log(event.target.result)
        // }
        // scores
        // const res2 = store2.get(8)
        // res2.onsuccess = function(event) {
        //   console.log(event.target.result)
        // }
        // 2.查询方式二:通过 store.openCursor 拿到游标对象
        const res1 = store1.openCursor()
        // users
        res1.onsuccess = function(event) {
          const cursor = event.target.result
          if(cursor) {
            if(cursor.key === 10) {
              console.log(cursor.key, cursor.value)
            } else {
              cursor.continue()
            }
          } else {
            console.log('查询完成')
          }
        }
        // scores
        const res2 = store2.openCursor()
        res2.onsuccess = function(event) {
          const cursor = event.target.result
          if(cursor) {
            if(cursor.key === 3) {
              console.log(cursor.key, cursor.value)
            } else {
              cursor.continue()
            }
          } else {
            console.log('查询完成')
          }
        }
        break
      case 2:
        console.log('点击了修改')
        // users
        const res3 = store1.openCursor()
        res3.onsuccess = function(event) {
          const cursor = event.target.result
          if(cursor) {
            if(cursor.key === 10) {
              const value = cursor.value
              value.name = 'invrlcn'
              cursor.update(value)
            } else {
              cursor.continue()
            }
          } else {
            console.log('查询完成')
          }
        }
        // scores
        const res4 = store2.openCursor()
        res4.onsuccess = function(event) {
           const cursor = event.target.result
           if(cursor) {
             if(cursor.key === 3) {
               const value = cursor.value
               value.grade = 100
               cursor.update(value)
             } else {
               cursor.continue()
             }
           } else {
            console.log('查询完成')
           }
        }
        break
      case 3:
        console.log('点击了删除')
        // users
        const res5 = store1.openCursor()
        res5.onsuccess = function(event) {
          const cursor = event.target.result
          if(cursor) {
            if(cursor.key === 30) {
              cursor.delete()
            } else {
              cursor.continue()
            }
          } else {
            console.log('查询完成')
          }
        }
        // scores
        const res6 = store2.openCursor()
        res6.onsuccess = function(event) {
          const cursor = event.target.result
          if(cursor) {
            if(cursor.key === 8) {
              cursor.delete()
            } else {
              cursor.continue()
            }
          } else {
            console.log('查询完成')
          }
        }
    }
  }
}