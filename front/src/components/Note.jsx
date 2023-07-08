import React from 'react'
import '../styles/Note.css'

const Note = () => {
  return (
    <article className='note'>
        <h2 className="note_header">someTitle</h2>
        <p className="note_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, illo.</p>
        <p className="note_date">01.01.2001</p>
    </article>
  )
}

export default Note