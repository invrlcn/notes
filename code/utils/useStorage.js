class Catch {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setCatch(key, value) {
    if (!key) {
      throw new Error('value error: value必须有值!')
    }
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCatch(key) {
    if (key) {
      const res = this.storage.getItem(key)
      return JSON.parse(res)
    }
  }

  removeCache(key) {
    this.storage.removeItem(key)
  }

  clearCatch() {
    this.storage.clear()
  }
}

const localCatch = new Catch()
const sessionCatch = new Catch(false)
