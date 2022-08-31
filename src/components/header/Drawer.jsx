import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Drawer = ({ checked, drawer, PDF, EPUB }) => {
  const [open, setOpen] = useState(false)

  const accordion = (e) => {
    e.stopPropagation()
    setOpen(!open)
  }

  return (
    <div className='header__left--drawer' data-drawer={checked}>
      <div className='drawer__header'>
        <span className='title'>NOTAS</span>
        <span className='close-drawer' onClick={drawer}>&#10006;</span>
      </div>
      <div className='drawer__body'>
        <ul onClick={drawer}>
          <li>
            <NavLink to='/' className='drawer__body--item'>Prólogo</NavLink>
          </li>
          <li>
            <NavLink to='/indice' className='drawer__body--item'>Indice</NavLink>
          </li>
          <li>
            <span className='drawer__body--item accordion' data-accordion-open={open} onClick={e => accordion(e)}>Descargar</span>
            <div className='accordion__content'>
              <a href={PDF} download='ODAS-NECIAS.pdf'>&rarr; PDF</a>
              <a href={EPUB} download='ODAS-NECIAS.epub'>&rarr; EPUB</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer