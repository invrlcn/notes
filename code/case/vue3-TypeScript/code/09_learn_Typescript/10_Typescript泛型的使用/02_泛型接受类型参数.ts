function foo<T, E, O>(n1: T, n2: E, n3?: O, ...n4: T[]) {

}

foo<number, string, string[]>(10, 'non', ['bob'])