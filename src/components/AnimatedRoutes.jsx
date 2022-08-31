import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, BookIndex, Oda } from './index'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()

  function useScrollToTop () {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  }

  useScrollToTop()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/odas-necias' element={<Home />} />
        <Route path='/odas-necias/indice' element={<BookIndex />} />
        <Route path='/odas-necias/indice/:oda' element={<Oda />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
