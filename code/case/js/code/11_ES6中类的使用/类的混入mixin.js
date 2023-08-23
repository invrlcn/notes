function mixinRunner(BaseClass) {
  return class extends BaseClass {
    running() {
      console.log('running')
    }
  }
}
function mixinEating(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log('eating')
    }
  }
}
class Person {}
class NewPerson extends mixinEating(mixinRunner(Person)) {

}
var p = new NewPerson()
p.running()
p.eating()