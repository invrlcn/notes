type Method = 'POST' | 'GET'
function request(url: string, method: Method) {
  
}

// const options = {
//   url: 'www.baidu.com',
//   method: 'POST'
// } as const

const options = {
  url: 'www.baidu.com',
  method: 'POST'
}

// options.method报错：
  // 1.类型断言as: as const
  // 1.类型断言as: as Method
// request(options.url, options.method)
request(options.url, options.method as Method)

export {}