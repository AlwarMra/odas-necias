import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ColorSwitch from './ColorSwitch'

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
            <NavLink to='/odas-necias' className='drawer__body--item' end>Prólogo</NavLink>
          </li>
          <li>
            <NavLink to='/odas-necias/indice' className='drawer__body--item' end>Indice</NavLink>
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
      <div className='color__switcher--mobile'>
        <ColorSwitch />
      </div>
    </div>
  )
}

export default Drawer
