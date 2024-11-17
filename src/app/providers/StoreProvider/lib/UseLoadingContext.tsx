import { useContext } from 'react'
import { StoreContext } from './StoreContext'

export const UseLoadingContext = (): boolean => {
  const { isLoading } = useContext(StoreContext)
  return isLoading
}
