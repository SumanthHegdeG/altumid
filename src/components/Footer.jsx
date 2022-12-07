import React from 'react'
import { Button } from 'react-bootstrap'
import footerImg from '../images/footer_img.png'
import footer1 from '../images/footer_robots.png'
import footer2 from '../images/footer_robots2.png'
import footer3 from '../images/footer_robots3.png'

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import './footer.css'
const Footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#f17983' }} className='p-5 mt-4'>
        <div className='container d-flex align-items-center justify-content-around flex-column flex-md-row gap-3'>
          <div className='d-flex justify-content-center flex-sm-column'>
            <img
              src={footerImg}
              alt='footerImg'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className='d-flex flex-column align-items-center'>
            <h3 className='text-center text-white'>
              Let's Discuss Your Project
            </h3>
            <p className='text-center text-white'>
              Choose an ideal tech partner who can turn your idea into a tech
              solution
            </p>
            <Button variant='outline-light' className='px-4'>
              Start
            </Button>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center gap-5 m-5 social-icon'>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
      </div>
      <div className='d-flex justify-content-center'>
        <img src={footer1} alt='footer1' />
        <img src={footer2} alt='footer2' />
        <img src={footer3} alt='footer3' />
      </div>
      <p className='text-center mt-3 fs-4'>Made by People and Robots</p>
      <h6 className='text-center'>© All Rights Reserved</h6>
    </div>
  )
}

export default Footer
