import { FC, ReactNode, useEffect, useState } from 'react'
import { StoreContext } from '../lib/StoreContext'
import {
  getContactsRequest,
  getMenuRequest,
  getSectionsRequest
} from '../api/storeApi'
// import { IMenu } from '../types/types'

interface MenuProviderProps {
  children: ReactNode
}

const StoreProvider: FC<MenuProviderProps> = ({ children }) => {
  const [store, setStore] = useState<any>({
    isLoading: false,
    menu: {},
    contacts: {},
    sections: {}
  })

  useEffect(() => {
    setStore({ isLoading: true, menu: store.menu, contacts: store.contacts })
    Promise.all([
      getMenuRequest(),
      getContactsRequest(),
      getSectionsRequest()
    ]).then(([menu, contacts, sections]) => {
      setStore({ isLoading: false, menu, contacts, sections })
    })
  }, [])

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
