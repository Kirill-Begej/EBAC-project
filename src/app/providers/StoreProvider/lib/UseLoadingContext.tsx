import { useContext } from 'react'
import { StoreContext } from './StoreContext'

export const UseLoadingContext = (): any => {
  const { isLoading } = useContext(StoreContext)
  return isLoading
}
