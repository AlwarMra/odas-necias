import { Header, Footer, AnimatedRoutes } from './components/index'

function App () {
  return (
    <div className='App'>
      <div className='app__wrapper container'>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </div>
  )
}

export default App
