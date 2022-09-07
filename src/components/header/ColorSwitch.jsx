import React, { useContext, useState } from 'react'
import ThemeContext from '../../context/ThemeContext'

const ColorSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [text, setText] = useState(theme === 'light' ? 'Noche' : 'Día')
  function setCurrentText () {
    theme === 'light' ? setText('Día') : setText('Noche')
  }
  function onClickToggle () {
    toggleTheme()
    setCurrentText()
  }
  return (
    <div className='color__toggler'>
      <span className='toggler__text'>{text}</span>
      <span className={'color__toggler--button ' + theme} onClick={onClickToggle} />
    </div>
  )
}

export default ColorSwitch
