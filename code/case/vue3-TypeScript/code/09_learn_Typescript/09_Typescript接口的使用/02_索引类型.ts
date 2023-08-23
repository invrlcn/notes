// 通过interface定义索引类型
interface Index {
  [index: number]: string
}

const info: Index = {
  0: 'js',
  1: 'html',
  2: 'vue'
}

interface Other {
  [name: string]: number
}

const obj: Other = {
  'c': 23,
  'java': 2133
}