// 声明模块
declare module 'lodash' {
  export function join(arr: arr[]): void
}

// 声明变量/函数/类
declare let lcnName: string
declare let lcnAge: number
declare function lcnFoo(): void
declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

// 声明命名空间
declare namespace $ {
  export function ajax(setting: any): any
}