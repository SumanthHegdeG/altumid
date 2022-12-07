import React from 'react'
import marketing from '../../images/marketing_service.png'
import process from '../../images/Our_process.png'
import consulting from '../../images/consulting.png'
import developments from '../../images/developments.png'

import design from '../../images/design.png'

import './marketing.css'
const Marketing = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center mt-5'>
        <img src={marketing} alt='marketing' />
      </div>
      <h2 className='text-center my-4'>Digital Marketing</h2>
      <div className='container my-5'>
        <p className='text-center my-4 mx-5' style={{ fontSize: '18px' }}>
          We provide an exhaustive and extensive marketing of your brand across
          all Digital Media by tapping into the expertise of our highly
          competent Digital Marketing team. All available social media platforms
          are utilized to help you reach your product to the right audience and
          garner maximum attention for it. We work with a long term strategy
          that will assure a loyal customer base and a great return on
          investment. Our impressive list of marketing tools includes
        </p>
      </div>
      <h2 className='text-center my-5'>Includes</h2>
      <div className='container'>
        <ul className='d-flex flex-wrap justify-content-center'>
          <li className='col-md-4 col-12 mb-4 ps-3'>Search</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Email</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Social Media</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Marketing Automation</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Analytics & Performance Reporting
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Content Development & Marketing
          </li>
        </ul>
      </div>
      <h2 className='text-center my-5'>Our Process</h2>
      <div className='d-flex justify-content-center mb-5 mx-3'>
        <img
          src={process}
          alt='process'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <h2 className='text-center my-5'>Our Service</h2>
      <div className='d-flex flex-wrap container justify-content-center'>
        <div className='shadow rounded-3 m-2 mx-5 p-3 px-5'>
          <img src={developments} alt='developments' />
          <h6 className='text-center mt-2'>Development</h6>
        </div>
        <div className='shadow rounded-3 m-2 mx-5 p-3 px-5'>
          <img src={design} alt='design' />
          <h6 className='text-center mt-2'>design</h6>
        </div>
        <div className='shadow rounded-3 m-2 mx-5 p-3 px-5'>
          <img src={consulting} alt='consulting' />
          <h6 className='text-center mt-2'>Consulting</h6>
        </div>
      </div>
    </div>
  )
}

export default Marketing
