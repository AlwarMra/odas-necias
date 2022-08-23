import './Header.css'
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Drawer from './Drawer'
import Hamburguer from './Hamburguer'
import PDF from '../../assets/ODAS-NECIAS.pdf'
import EPUB from '../../assets/ODAS-NECIAS.epub'

const Header = () => {
  const [checked, setChecked] = useState(false)
  const [overlay, setOverlay] = useState(true)
  const body = document.body
  const drawer = () => {
    setChecked(!checked)
    setOverlay(!overlay)
    overlay ? body.classList.add('noscroll') : body.classList.remove('noscroll')
  }

  return (
    <>
      <div id='overlay' aria-hidden={overlay} onClick={drawer} />
      <Drawer
        checked={checked}
        EPUB={EPUB}
        drawer={drawer} PDF={PDF}
      />
      <header className='header grid'>
        <div className='header__left mobile'>
          <Hamburguer drawer={drawer} />
        </div>
        <div className='header__middle'>
          <p className='high-font bold'><Link to='/'>Odas necias</Link></p>
        </div>
        <div className='header__right desktop'>
          <ul className='flex'>
            <li><NavLink to='/indice'>Indice</NavLink></li>
            <li className='header__right--megamenu'>
              Descargar
              <div className='megamenu'>
                <a href={PDF} download='ODAS-NECIAS.pdf'>PDF</a>
                <a href={EPUB} download='ODAS-NECIAS.epub'>EPUB</a>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
