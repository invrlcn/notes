// 1.
// import { name, age, foo } from './foo.js'
// import { height, address, bar } from './bar.js'

// export { name, age, foo, height, address, bar }

//2.  export和import一起使用
// export { name, age, foo } from './foo.js'
// export { address, height, bar } from './bar.js'

// 3.
export * as foo from './foo.js'
export * as bar from './bar.js'
