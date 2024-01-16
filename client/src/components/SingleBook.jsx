import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleBook() {
  const {_id,book_title,image_url}= useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h1>Book Title : {book_title}</h1>
      <h2>Book ID : {_id}</h2>
      <img src={image_url} alt={book_title} className='w-1/5'/>
    </div>
  )
}

export default SingleBook