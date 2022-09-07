import { createContext, useState, useEffect } from 'react'

const initialTheme = localStorage.getItem('theme') ?? 'light'
const ThemeContext = createContext(initialTheme)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme)

  const stylesheet = document.getElementById('pagestyle')
  const toggleTheme = () => {
    if (theme === 'light') {
      stylesheet.setAttribute('href', '/src/root-dark.css')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      stylesheet.setAttribute('href', '/src/root.css')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }
  const data = { theme, toggleTheme }

  useEffect(() => {
    if (theme === 'dark') stylesheet.setAttribute('href', '/src/root-dark.css')
  }, [])
  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
