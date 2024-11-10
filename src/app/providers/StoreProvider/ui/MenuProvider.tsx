import { FC, ReactNode, useEffect, useState } from 'react'
import { MenuContext } from '../lib/MenuContext'
import { getMenuRequest } from '../api/storeApi'
import { IMenu } from '../types/types'

interface MenuProviderProps {
  children: ReactNode
}

const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState<IMenu>(null)

  useEffect(() => {
    getMenuRequest().then(res => {
      setMenu(res)
    })
  }, [])

  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>
}

export default MenuProvider
