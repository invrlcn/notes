
function useSate(state: any) {
  let currentState = state
  const changeState = (newState: any) => {
    currentState = newState
  }

  const tuple: [ any, (newState: any) => void ] = [ currentState, changeState ]
  return tuple
}

const [counter, setCounter] = useSate(10)
setCounter(100)

const [ title, setTitle ] = useSate('abc')

// function foo(): void {
    // 没有返回值
// }

export {}