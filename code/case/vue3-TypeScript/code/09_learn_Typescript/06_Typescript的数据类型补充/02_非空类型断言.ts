function print(message?: string) {
  console.log(message!.toLocaleLowerCase())
}
print('HELLO')

// 因为传入的message有可能是为undefined的，这个时候是不能执行方法的；
// 但是，我们确定传入的参数是有值的，这个时候我们可以使用非空类型断言
// 非空断言使用的是 ! ，表示可以确定某个标识符是有值的，跳过ts在编译阶段对它的检测