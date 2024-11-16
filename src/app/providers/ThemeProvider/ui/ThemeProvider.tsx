import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = Theme.LIGHT

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.DARK
      : Theme.LIGHT
    setTheme(newTheme)
    document.body.className = newTheme || defaultTheme
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
