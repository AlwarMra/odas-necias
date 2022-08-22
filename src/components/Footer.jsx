import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <small>Copyright &copy; {year}, Alwar Müra. Todos los derechos reservados. </small>
    </footer>
  )
}

export default Footer
