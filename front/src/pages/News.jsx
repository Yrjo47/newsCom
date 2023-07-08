import React from 'react'
import Note from '../components/Note'
import '../styles/News.css'

const News = () => {
  return (
    <div className=' news'>
      <a href='/' className="home_button">Home</a>
      <div className="news_wrapper">
        <div className="news_container">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  )
}

export default News