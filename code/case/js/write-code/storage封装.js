class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal === true ? localStorage : sessionStorage
  }
  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }
  getItem(key) {
    return this.storage.getItem(key)
  }
  removeItem(key) {
    this.storage.removeItem(key)
  }
  clear() {
    this.storage.clear()
  }
}
const LStorage = new Cache()
const SStorage = new Cache(false)
LStorage.setItem('token', '123123487129048y1824y1')
LStorage.setItem('age', '100')
console.log(LStorage.getItem('token'))

LStorage.clear()

SStorage.setItem('name', 'tom')

SStorage.removeItem('name')
