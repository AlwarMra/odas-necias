import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Index from './components/Index'
import Oda from './components/Oda'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/indice' element={<Index />} />
        <Route path='/indice/:oda' element={<Oda />} />
      </Routes>
    </div>
  )
}

export default App
