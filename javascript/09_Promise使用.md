# Promise使用

## 一、**异步任务的处理**

在ES6出来之后，有很多关于Promise的讲解、文章，也有很多经典的书籍讲解Promise，虽然等你学会Promise之后，会觉得Promise不过如此，但是在初次接触的时候都会觉得这个东西不好理解。这里我们举一个例子：

我们调用一个函数，这个函数中发送网络请求（我们可以用定时器来模拟）

如果发送网络请求成功了，那么告知调用者发送成功，并且将相关数据返回过去

如果发送网络请求失败了，那么告知调用者发送失败，并且告知错误信息

```javascript
function requestData(url, successCallback, failureCallback) {
  setTimeout(() => {
    if(url === 'http://invrlcn.org') {
        // 发送成功
       successCallback('成功数据')
    }   else {
        // 发送失败
       failureCallback('失败原因')
    }
  }, 1000)
}
```

