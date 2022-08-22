import React from 'react'
import { Link } from 'react-router-dom'
import data from '../assets/data.json'

const BookIndex = () => {
  const poems = data.data

  const randomNumber = Math.floor(Math.random() * (poems.length + 1))
  console.log(randomNumber)
  return (
    <div className='index'>
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
      <div className='poem__nav'>
        <p><Link className='index__link poem__nav--prev' to={`/indice/${poems[0].slug}`}>Comenzar a leer</Link></p>
        <p><Link className='index__link poem__nav--next' to={`/indice/${poems[randomNumber].slug}`}>Oda al azar</Link></p>
      </div>
    </div>
  )
}

export default BookIndex
