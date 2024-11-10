import { useContext } from 'react'
import { MenuContext } from './MenuContext'

export const UseMenuContext = () => {
  const context = useContext(MenuContext)

  return context
}
