import { FC, ReactNode, useEffect, useState } from 'react'
import { StoreContext } from '../lib/StoreContext'
import { getMenuRequest } from '../api/storeApi'
// import { IMenu } from '../types/types'

interface MenuProviderProps {
  children: ReactNode
}

const StoreProvider: FC<MenuProviderProps> = ({ children }) => {
  const [store, setStore] = useState<any>({
    isLoading: false,
    menu: {}
  })

  useEffect(() => {
    setStore({ isLoading: true, menu: store.menu })
    getMenuRequest()
      .then(res => {
        setTimeout(() => {
          setStore({ isLoading: false, menu: res })
        }, 3000)
      })
      .finally(() => {
        // eslint-disable-next-line no-console
        console.log('finally')
      })
  }, [])

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
