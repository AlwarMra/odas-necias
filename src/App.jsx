import './App.css'
import { Header, Home, BookIndex, Oda, Footer } from './components/index'
import { Route, Routes } from 'react-router-dom'
import data from './assets/data.json'
function App () {
  console.log(data.data)
  return (
    <div className='App'>
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
