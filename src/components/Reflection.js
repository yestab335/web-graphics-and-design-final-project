import React from 'react'
import './ReflectionStyles.css'
import {Link} from 'react-router-dom'
import Profile from '../assets/profile.png'
import RLogo from '../assets/react-logo.png'

const Reflection = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Reflection</h1>
                <p>
                    Throughout the entire semester the Web Graphics and Design Class has: learned HTML, learned CSS,
                    learned image placement in HTML, learned tables and graphs. This Project was designed to incorporate
                    everything (if not most) of what we have learned. Being the Teacher Assistant, I decided to take a step
                    further and build my application using a JavaScript library known as ReactJS. I decided to build my website
                    on the topic of space travel. In my English class we are currently working on a research paper about the
                    1950s. My main idea was the <a href='https://bit.ly/3zfwYog' style={{ textDecoration: 'underline' }}>Space Race</a>.
                    With this topic in mind, I decided to base my website on space travel. In order to create different pages,
                    as well as a working 404 error page, I had to install a package called "react-router-dom" (version 6).
                    Overall, I had a fun time working on this project as well as being a teacher's assistant.
                </p>
                <Link to='/Resources'><button className='btn'>View Sources</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Profile} className='img' alt='Profile' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={RLogo} className='img' alt='React JS Logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reflection
