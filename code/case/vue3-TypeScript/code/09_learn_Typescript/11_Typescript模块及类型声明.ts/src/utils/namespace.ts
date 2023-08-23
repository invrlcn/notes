/*
  namespace 命名空间： 可以创建同样的名称
  命名空间在TypeScript早期时，称之为内部模块，主要目的是将一个模块内部再进行作用域的划分，防止一些命名冲突的问题
*/ 
 export namespace Time {
  export function format(time: string) {
    return '2022-2-2'
  }
}
 export namespace  Price{
  export function format(price: number) {
    return '99.99'
  }
}

