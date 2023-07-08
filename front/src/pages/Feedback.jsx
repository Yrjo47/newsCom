import React from 'react'
import '../styles/Feedback.css'

const Feedback = () => {
  return (
    <div className='feedback'>
        <a href='/' className="home_button">Home</a>
        <div className="form_wrapper">
            <div className="form_container">
                <h1 className="form_header">Feedback form</h1>
                <form action="" className="feedback_form">
                    <div>
                        <label htmlFor="name">Enter your name:</label>
                        <input id='name' type="text" />
                    </div>
                    <div>
                        <label htmlFor="address">Enrer you address:</label>
                        <input id='address' type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Enter your email:</label>
                        <input id='email' type="email" />
                    </div>
                    <button className="form_button">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Feedback