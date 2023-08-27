import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  function positionFn() {
    setScrollX(window.scrollX)
    setScrollY(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', positionFn)

    return () => {
      window.removeEventListener('scroll', positionFn)
    }
  }, [scrollX, scrollY])

  return [scrollX, scrollY]
}
