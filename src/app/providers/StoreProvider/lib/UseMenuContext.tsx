import { useContext } from 'react'
import { StoreContext } from './StoreContext'
import { IMenu } from '../types/types'

export const UseMenuContext = (): IMenu => useContext(StoreContext)
