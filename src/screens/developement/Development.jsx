import React from 'react'
import development from '../../images/service_development.png'
import process from '../../images/Our_process.png'
import consulting from '../../images/consulting.png'
import marketing1 from '../../images/marketing1.png'
import design from '../../images/design.png'

import './development.css'
const Development = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center mt-5'>
        <img src={development} alt='development' />
      </div>
      <h2 className='text-center my-4'>Development</h2>
      <div className='container my-5'>
        <p className='text-center my-4 mx-5' style={{ fontSize: '18px' }}>
          When the limitations of the packaged CMS or eCommerce solution are
          standing in the way of the customer’s agenda, we offer our custom
          website development option. We have extensive experience in developing
          sites and apps of all types, complexities and budgets
        </p>
      </div>
      <h2 className='text-center my-5'>Includes</h2>
      <div className='container'>
        <ul className='d-flex flex-wrap justify-content-center'>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Web Enablement of any Legacy Applications
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Customized Web Portal Solutions
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Community Site Development
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Custom Social Network Development
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>eCommerce Solutions</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Internet and Intranet Solutions
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Corporate Web Based Solutions
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>Business Applications</li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Payment Processor Integrations
          </li>
          <li className='col-md-4 col-12 mb-4 ps-3'>
            Specific Custom Applications as per Client Demand
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
          <img src={marketing1} alt='marketing1' />
          <h6 className='text-center mt-2'>marketing</h6>
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

export default Development
