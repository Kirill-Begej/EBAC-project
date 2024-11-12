import { useContext } from 'react'
import { StoreContext } from './StoreContext'
import { ISections } from '../types/types'

export const UseSectionsContext = (): ISections => {
  const { sections } = useContext(StoreContext)
  return sections
}
