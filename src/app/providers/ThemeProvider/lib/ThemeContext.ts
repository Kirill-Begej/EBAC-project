import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export const ThemeContext = createContext<any>({})
