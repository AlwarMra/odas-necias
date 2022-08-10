import React from 'react'
import { NavLink } from 'react-router-dom'

const Drawer = ({ checked, drawer }) => {
  return (
    <div className='header__left--drawer' data-drawer={checked}>
      <div className='drawer__header'>
        <span className='main-font'>NOTAS</span>
        <span className='close-drawer' onClick={drawer}>&#10006;</span>
      </div>
      <div className='drawer__body'>
        <ul>
          <li>
            <NavLink to='/'>Prólogo</NavLink>
          </li>
          <li>
            <NavLink to='/indice'>Indice</NavLink>
          </li>
          <li>
            <NavLink to='/contacto'>Contacto</NavLink>
          </li>
          <li>
            <a href='javascript:;'>Descargar</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
