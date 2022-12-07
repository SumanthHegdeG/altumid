import React from 'react'
import design from '../../images/service_design.png'
import process from '../../images/Our_process.png'
import consulting from '../../images/consulting.png'
import marketing1 from '../../images/marketing1.png'
import developments from '../../images/developments.png'
import './design.css'
const DesignScreen = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center mt-5'>
        <img src={design} alt='offer1' />
      </div>
      <h2 className='text-center my-4'>Design</h2>
      <div className='container my-5'>
        <p className='text-center my-4 mx-5' style={{ fontSize: '18px' }}>
          Do you want to bring your idea to life? Or want to build a brand for
          yourself? Or simply create an appeal for an existing product? Here at
          Scketch, we listen to you, understand your needs and develop
          strategies to fulfil your needs. Be it creating a user interface or a
          responsive website or a brand proposition or simply an animation to
          emphasize your product, we specialize in sketching your content across
          any platform to gain you maximum audience and maximum impact. Our
          culture eyes every detail to bring you the perfect look and feel of
          your brand. We just happen to know what is best for you!
        </p>
      </div>
      <h2 className='text-center my-5'>Includes</h2>
      <div className='container'>
        <ul className='d-flex flex-wrap justify-content-center'>
          <li className='col-md-4 col-12 mb-4'>Responsive Website Design</li>
          <li className='col-md-4 col-12 mb-4'>User Experience Design</li>
          <li className='col-md-4 col-12 mb-4'>
            CMS and eCommerce Integration
          </li>
          <li className='col-md-4 col-12 mb-4'>
            Usability and Competition Analysis
          </li>
          <li className='col-md-4 col-12 mb-4'>
            Cross Browser and Platform Testing
          </li>
          <li className='col-md-4 col-12 mb-4'>Website Content Strategy</li>
          <li className='col-md-4 col-12 mb-4'>
            Information Architecture Design
          </li>
          <li className='col-md-4 col-12 mb-4'>Installation & Setup</li>
          <li className='col-md-4 col-12 mb-4'>Maintenance</li>
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
          <img src={developments} alt='developments' />
          <h6 className='text-center mt-2'>developments</h6>
        </div>
        <div className='shadow rounded-3 m-2 mx-5 p-3 px-5'>
          <img src={consulting} alt='consulting' />
          <h6 className='text-center mt-2'>Consulting</h6>
        </div>
      </div>
    </div>
  )
}

export default DesignScreen
