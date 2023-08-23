const obj = { name: 'lcn', age: 20 }

function double() {
  console.log(obj.name, obj.age * 2)
}

double()

obj.name = 'bob'
double()