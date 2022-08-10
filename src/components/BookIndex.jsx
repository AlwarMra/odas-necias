import React from 'react'
import { Link } from 'react-router-dom'
import data from '../assets/data.json'

const BookIndex = () => {
  const poems = data.data

  return (
    <div className='index container'>
      <h2 className='title bold'>Indice</h2>
      <div className='index__container'>
        <ol className='index__list'>
          {poems.map((poem, index) => (
            <li className='index__list--item' key={index}>
              <Link to={`/indice/${poem.slug}`} className='flex'>
                <span className='index--roman' /> <span className='poem-title'>{poem.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookIndex
