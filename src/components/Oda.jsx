import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import data from '../assets/data.json'
import { toRomanNumber } from '../utils/utils'

const Oda = () => {
  const [position, setPosition] = useState('')
  const [isFirst, setIsFirst] = useState(false)
  const [isLast, setIsLast] = useState(false)
  const [roman, setRoman] = useState('')
  const poems = data.data
  const { oda } = useParams()

  const actualOda = poems.find(elem => elem.slug === oda)
  const indexOfPoem = poems.indexOf(actualOda)

  useEffect(() => {
    actualOda.center !== undefined ? setPosition('center') : setPosition('')

    if (indexOfPoem === 0) setIsFirst(true)
    if (indexOfPoem === (poems.length - 1)) setIsLast(true)

    setRoman(toRomanNumber(indexOfPoem + 1))
  }, [actualOda])

  return (
    <div className='poem'>
      <h1 className='title bold'>{roman}. {actualOda.title}</h1>
      {actualOda?.quote && <p className='quote'>{actualOda.quote}</p>}
      <pre className={'poem__content ' + position}>
        {actualOda.content}
      </pre>
      <div className='poem__nav'>
        {isFirst ? '' : <NavLink className='poem__nav--prev bold' to={`/indice/${poems[indexOfPoem - 1]?.slug}`}><span className='poem__nav--arrow left'><span className='shaft' /></span> Anterior</NavLink>}
        {isLast ? '' : <NavLink className='poem__nav--next bold' to={`/indice/${poems[indexOfPoem + 1]?.slug}`}>Siguiente <span className='poem__nav--arrow right'><span className='shaft' /></span></NavLink>}
      </div>

    </div>
  )
}

export default Oda
