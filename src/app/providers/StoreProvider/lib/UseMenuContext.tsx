import { useContext } from 'react'
import { MenuContext } from './MenuContext'
import { IMenu } from '../types/types'

export const UseMenuContext = (): IMenu => useContext(MenuContext)
