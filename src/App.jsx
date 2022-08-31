import './App.css'
import { Header, Home, BookIndex, Oda, Footer } from './components/index'
import { Route, Routes } from 'react-router-dom'
function App () {
  return (
    <div className='App container'>
      <Header />
      <Routes>
        <Route path='/odas-necias' element={<Home />} />
        <Route path='/odas-necias/indice' element={<BookIndex />} />
        <Route path='/odas-necias/indice/:oda' element={<Oda />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
