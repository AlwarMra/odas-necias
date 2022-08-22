import './App.css'
import { Header, Home, BookIndex, Oda, Footer } from './components/index'
import { Route, Routes } from 'react-router-dom'
function App () {
  return (
    <div className='App container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/indice' element={<BookIndex />} />
        <Route path='/indice/:oda' element={<Oda />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
