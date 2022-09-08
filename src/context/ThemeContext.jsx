import { createContext, useState } from 'react'

const initialTheme = window.localStorage.getItem('theme') ?? 'light'
const ThemeContext = createContext(initialTheme)

const root = document.querySelector(':root')

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      root.style.setProperty('--main-color', '#404040')
      root.style.setProperty('--secondary-color', '#fffafa')
      window.localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      root.style.setProperty('--main-color', '#fffafa')
      root.style.setProperty('--secondary-color', '#404040')
      window.localStorage.setItem('theme', 'light')
    }
  }
  const data = { theme, toggleTheme }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
