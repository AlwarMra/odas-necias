import './Header.css'
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Drawer from './Drawer'
import Hamburguer from './Hamburguer'

const Header = () => {
  const [checked, setChecked] = useState(false)
  const drawer = () => { setChecked(!checked) }

  return (
    <header className='header grid'>
      <div className='header__left mobile'>
        <Hamburguer drawer={drawer} />
        <Drawer checked={checked} drawer={drawer} />
      </div>
      <div className='header__middle'>
        <p className='high-font bold'><Link to='/'>Odas necias</Link></p>
      </div>
      <div className='header__right desktop'>
        <ul className='flex'>
          <li><NavLink to='/indice'>Indice</NavLink></li>
          <li><NavLink to='/contacto'>Contacto</NavLink></li>
          <li><a href=''>Descargar</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
