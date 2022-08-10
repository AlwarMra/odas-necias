import React from 'react'
import { NavLink } from 'react-router-dom'

const Drawer = ({ checked, drawer }) => {
  const items = document.getElementsByClassName('drawer__body--item')
  Array.from(items).forEach((item) => {
    item.addEventListener('click', () => drawer())
  })

  return (
    <div className='header__left--drawer' data-drawer={checked}>
      <div className='drawer__header'>
        <span className='title'>NOTAS</span>
        <span className='close-drawer' onClick={drawer}>&#10006;</span>
      </div>
      <div className='drawer__body'>
        <ul>
          <li>
            <NavLink to='/' className='drawer__body--item'>Prólogo</NavLink>
          </li>
          <li>
            <NavLink to='/indice' className='drawer__body--item'>Indice</NavLink>
          </li>
          <li>
            <NavLink to='/contacto' className='drawer__body--item'>Contacto</NavLink>
          </li>
          <li>
            <a href='/' className='drawer__body--item'>Descargar</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
