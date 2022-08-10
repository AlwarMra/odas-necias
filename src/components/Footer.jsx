import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <small>&copy; Copyright {year}, Alwar Müra</small>
    </footer>
  )
}

export default Footer
