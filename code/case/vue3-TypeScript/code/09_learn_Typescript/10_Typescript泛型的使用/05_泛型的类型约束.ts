 interface ILength {
   length: number
 }
 
 function getLength<T extends ILength>(args: T) {
   return args.length
 }

 const r1 = getLength<number[]>([10, 20, 30])
 const r2 = getLength<string>('abcd')
 const r3 = getLength({name: 'bob', length: 20})
 console.log(r1, r2, r3)
