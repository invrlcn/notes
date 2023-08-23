function foo(point: { x: number, y: number, z?: number }) {
  console.log(point.x, point.y, point.z)
}

foo({ x: 10, y: 20, z: 30 })
foo({ x: 10, y: 20})



export {}