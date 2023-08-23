// this是可以被推导出来的
const info = {
  name: 'bob',
  eating() {
    console.log(this.name  +  'eating~')
  }
}
info.eating()