import React from 'react'
import development from '../../images/service_development.png'
import process from '../../images/Our_process.png'
import developments from '../../images/developments.png'

import marketing1 from '../../images/marketing1.png'
import design from '../../images/design.png'

import './consulting.css'
const Consulting = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center mt-5'>
        <img src={development} alt='development' />
      </div>
      <h2 className='text-center my-4'>Digital Consulting</h2>
      <div className='container my-5'>
        <p className='text-center my-4 mx-5' style={{ fontSize: '18px' }}>
          We serve you with a palette of incubation, consultation &
          transformation; prepared with a mix of experience, expertise and
          latest technologies. We help startup-reneurs by empowering them with
          free space and mentor them in their dream projects. We’re continuously
          planning, researching, auditing and iterating to give you a solution
          just right for your business and your customers.
        </p>
      </div>
      <h2 className='text-center my-5'>Includes</h2>
      <div className='container'>
        <ul className='d-flex flex-wrap justify-content-center'>
          <li className='col-md-4 col-12 mb-4 ps-3'>Strategy</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Transformation</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Cloud</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Technology</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Digital Audits</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Incubation</li>
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
          <img src={marketing1} alt='marketing1' />
          <h6 className='text-center mt-2'>marketing</h6>
        </div>
        <div className='shadow rounded-3 m-2 mx-5 p-3 px-5'>
          <img src={design} alt='design' />
          <h6 className='text-center mt-2'>design</h6>
        </div>
        <div className='shadow rounded-3 m-2 mx-5 p-3 px-5'>
          <img src={developments} alt='developments' />
          <h6 className='text-center mt-2'>Development</h6>
        </div>
      </div>
    </div>
  )
}

export default Consulting
