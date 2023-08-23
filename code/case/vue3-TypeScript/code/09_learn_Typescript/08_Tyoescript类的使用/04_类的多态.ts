class Animal {
  action() {
    console.log('animal action')
  }
}

class Dog extends Animal {
  action() {
    console.log('dog action')
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swimming")
  }
}

// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach(i => {
    i.action()
  })
}

makeActions([new Animal(), new Dog(), new Fish()])

