import './Header.css'
import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Drawer from './Drawer'
import Hamburguer from './Hamburguer'

const Header = () => {
  const [checked, setChecked] = useState(false)
  const drawer = () => { setChecked(!checked) }

  return (
    <header className='header grid container'>
      <div className='header__left mobile'>
        <Hamburguer drawer={drawer} />
        <Drawer checked={checked} drawer={drawer} />
      </div>
      <div className='header__middle'>
        <h1 className='main-font bold'><Link to='/'>Odas necias</Link></h1>
      </div>
      <div className='header__right desktop'>
        <ul className='flex'>
          <li><NavLink to='/indice'>Indice</NavLink></li>
          <li><NavLink to='/contacto'>Contacto</NavLink></li>
          <li><a href='javascript:;'>Descargar</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
