import { useContext } from 'react'
import { Header, Footer, AnimatedRoutes } from './components/index'
import ThemeContext from './context/ThemeContext'

function App () {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='App' id={theme}>
      <div className='app__wrapper container'>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </div>
  )
}

export default App
