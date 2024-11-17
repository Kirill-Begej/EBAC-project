import { useContext } from 'react'
import { StoreContext } from './StoreContext'
import { IContacts } from '../types/types'

export const UseContactsContext = (): IContacts => {
  const { contacts } = useContext(StoreContext)
  return contacts
}
