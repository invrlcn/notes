// enum Direction {
//   LEFT = 'LEFT',
//   RIGHT = 'RIGHT',
//   TOP = 'TOP',
//   BOTTOM = 'BOTTOM'
// }
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM = 100
}

function turnDirection(direction: Direction) {
  console.log(direction)
  switch(direction) {
    case Direction.LEFT:
      console.log('改变角色的方向向左')
      break;
    case Direction.RIGHT: 
      console.log('改变角色的方向向右')
      break;
    case Direction.TOP:
      console.log('改变角色的方向向上')
      break;
    case Direction.BOTTOM:
      console.log('改变角色的方向向下')
      break;
    default: 
      const foo: never = direction
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)