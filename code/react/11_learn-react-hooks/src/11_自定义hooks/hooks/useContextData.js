import { useContext } from 'react'
import { userContext, themeContext } from '../context'
export default function useContextData() {
  const user = useContext(userContext)
  const theme = useContext(themeContext)
  return [user, theme]
}
