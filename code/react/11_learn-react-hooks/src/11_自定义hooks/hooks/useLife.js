import { useEffect } from 'react'

export default function useLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建了`)

    return () => {
      console.log(`${name}组件被销毁了`)
    }
  })
}
