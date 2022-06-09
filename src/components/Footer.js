import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
            <div>
              <p>245 South Pier Rd.</p>
              <h4>Narragansett, RI</h4>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 1-401-792-9400</h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> yestab335@gmail.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>"Narragansett High School is a public high
          school in Narragansett, Rhode Island.
          As of 2015, Narragansett High School
          serces 477 students in grades 9-12."</p>
          <div className='social'>
            <a href='https://facebook.com/' target='_blank'><FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} className='icon' /></a>
            <a href='https://twitter.com/' target='_blank'><FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} className='icon' /></a>
            <a href='https://linkedin.com/' target='_blank'><FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} className='icon' /></a>
            <a href='https://github.com/yestab335' target='_blank'><FaGithub size={30} style={{ color: '#ffffff', marginRight: '1rem' }} className='icon' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
