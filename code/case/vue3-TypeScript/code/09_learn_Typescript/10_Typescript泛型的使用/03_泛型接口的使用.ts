interface IFoo<T> {
  valueList: T[],
  valueInit: T,
  valueHandle: (value: T) => void
}

const foo: IFoo<number> = {
  valueList: [10, 20, 30],
  valueInit: 20,
  valueHandle: (value: number) => {
    console.log(value)
  }
}