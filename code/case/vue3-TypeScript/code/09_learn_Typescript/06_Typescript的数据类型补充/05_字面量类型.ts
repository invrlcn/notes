// 'abc'也可以作为类型，称为字面量类型,使用字面量类型的时候其值必须和字面量必须保持一致
const msg: 'abc' = 'abc'


// 字面量类型的意义, 就是必须结合联合类型

type Posion = 'left' | 'right' | 'top' | 'bottom'
let posion: Posion = 'left'