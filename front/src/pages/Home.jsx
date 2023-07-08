import React from 'react'
import Note from '../components/Note'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="home_wrapper">
            <div className="home_container">
                {/* <h1 className='home_header'>Welcome to my website</h1> */}
                <Note />
                <Note />
                <Note />
                <a href="/news" className="news_button">All news</a>
                <a href="/feedback" className="feedback_button">Send feedback</a>                
            </div>
        </div>

    </div>
  )
}

export default Home