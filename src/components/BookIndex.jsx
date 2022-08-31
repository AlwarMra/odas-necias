import React from 'react'
import data from '../assets/data.json'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BookIndex = () => {
  const poems = data.data
  const randomNumber = Math.floor(Math.random() * (poems.length + 1))
  return (
    <motion.div
      className='index'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
    >
      <h2 className='title bold'>Indice</h2>
      <div className='index__container'>
        <ol className='index__list'>
          {poems.map((poem, index) => (
            <li className='index__list--item' key={index}>
              <Link to={`/odas-necias/indice/${poem.slug}`} className='flex'>
                <span className='index--roman' /> <span className='poem-title'>{poem.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div className='poem__nav'>
        <p><Link className='index__link poem__nav--prev' to={`/odas-necias/indice/${poems[randomNumber].slug}`}>Oda al azar</Link></p>
        <p><Link className='index__link poem__nav--next' to={`/odas-necias/indice/${poems[0].slug}`}>Comenzar a leer</Link></p>
      </div>
    </motion.div>
  )
}

export default BookIndex
