import React from 'react'
import { Link } from 'react-router-dom'
import data from '../assets/data.json'

const BookIndex = () => {
  const poems = data.data

  return (
    <ul>
      {poems.map((poem, index) => (
        <li key={index}><Link to={`/indice/${poem.slug}`}>{index + 1}. {poem.title}</Link></li>
      ))}
    </ul>
  )
}

export default BookIndex
