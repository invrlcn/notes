
function useSate<T>(state: T) {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }

  const tuple: [ T, (newState: T) => void ] = [ currentState, changeState ]
  return tuple
}

const [counter, setCounter] = useSate(10)
setCounter(100)

const [ title, setTitle ] = useSate('abc')

// function foo(): void {
    // 没有返回值
// }

export {}