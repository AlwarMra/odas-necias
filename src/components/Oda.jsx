import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import data from '../assets/data.json'
import { toRomanNumber } from '../utils/utils'
import { motion } from 'framer-motion'

const Oda = (props) => {
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
    indexOfPoem === 0 ? setIsFirst(true) : setIsFirst(false)
    indexOfPoem === (poems.length - 1) ? setIsLast(true) : setIsLast(false)
    setRoman(toRomanNumber(indexOfPoem + 1))
  }, [actualOda])

  return (
    <>
      <motion.div
        className='poem'
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
        exit={{ opacity: 0 }}
      >
        <h1 className='title bold'>{roman}. {actualOda.title}</h1>
        {actualOda?.quote && <p className='quote'>{actualOda.quote}</p>}
        <pre className={'poem__content ' + position}>
          {actualOda.content}
        </pre>
      </motion.div>
      <div className='poem__nav'>
        {
        isFirst
          ? ''
          : (
            <NavLink
              className='poem__nav--prev bold'
              to={`/odas-necias/indice/${poems[indexOfPoem - 1]?.slug}`}
            >
              <span className='poem__nav--arrow left'><span className='shaft' /></span> Anterior
            </NavLink>
            )
        }
        {
        isLast
          ? ''
          : (
            <NavLink
              className='poem__nav--next bold'
              to={`/odas-necias/indice/${poems[indexOfPoem + 1]?.slug}`}
            >
              Siguiente <span className='poem__nav--arrow right'><span className='shaft' /></span>
            </NavLink>
            )
        }
      </div>
    </>
  )
}

export default Oda
