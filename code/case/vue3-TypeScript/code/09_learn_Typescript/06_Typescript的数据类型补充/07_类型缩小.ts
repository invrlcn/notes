// typeof

type IdType = number | string
function print(id: IdType) {
  if(typeof id === 'string') {
    console.log(id.toLocaleLowerCase())
  } else {
    console.log(id)
  }
}

// 平等缩小（比如===、!==） 

type Posion = 'left' | 'right' | 'center'
function posion(payload: Posion) {
  if(payload === 'left') {
    console.log(payload)
  } else if(payload === 'center') {
    console.log(payload)
  } else {
    console.log(payload)
  }
}

// instanceof

function printTime(time: string | Date) {
  if(time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time.toLocaleLowerCase())
  }
}

// in
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(params: Fish | Dog) {
  if('swimming' in params) {
    params.swimming()
  } else {
    params.running()
  }
}