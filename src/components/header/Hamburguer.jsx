import React from 'react'

const Hamburguer = ({ drawer }) => {
  return (
    <label className='ham-menu' htmlFor='menu'>
      <input type='checkbox' name='checkbox' id='menu' onChange={drawer} />
      <span />
      <span />
      <span />
    </label>
  )
}

export default Hamburguer
