import React from 'react'
import banner1 from '../../images/banner1.png'
import offer1 from '../../images/offer1.png'
import offer2 from '../../images/offer2.png'
import design from '../../images/design.png'
import consulting from '../../images/consulting.png'
import marketing1 from '../../images/marketing1.png'
import developments from '../../images/developments.png'

import './home.css'
const HomeScreens = () => {
  return (
    <div>
      <section id='banner'>
        <div className='d-flex mt-5 justify-content-center mx-3'>
          <img
            src={banner1}
            alt='banner1'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className=' d-flex flex-column align-items-center'>
          <h1>A Creative Studio that</h1>
          <h2>Thinks Design</h2>
        </div>
      </section>
      <section id='offers'>
        <h3 className='text-center'>Our Offerings</h3>
        <div className='container d-flex flex-column '>
          <div className='offdiv shadow'>
            <img src={offer1} alt='offer1' />
            <div>
              <h5 className='text-center'>
                Digital Build: <span>Innovation</span>
              </h5>
              <p className='text-center'>
                Through the Digital Build process, we build your digital assets
                from scratch and develop your embryonic ideas into a robust
                brand.
              </p>
            </div>
          </div>
          <div className='offdiv shadow align-self-end'>
            <img src={offer2} alt='offer2' />
            <div>
              <h5 className='text-center'>
                Digital Build: <span>Innovation</span>
              </h5>
              <p className='text-center'>
                Through the Digital Build process, we build your digital assets
                from scratch and develop your embryonic ideas into a robust
                brand.
              </p>
            </div>
          </div>
        </div>
        <div className='d-flex flex-wrap justify-content-center gap-5 cards'>
          <div className='d-flex gap-5'>
            <div>
              <img src={design} alt='design' />
              <p className='text-center'>design</p>
            </div>
            <div>
              <img src={consulting} alt='consulting' />
              <p className='text-center'>Consulting</p>
            </div>
          </div>
          <div className='d-flex gap-5'>
            <div>
              <img src={marketing1} alt='marketing1' />
              <p className='text-center'>marketing</p>
            </div>
            <div>
              <img src={developments} alt='developments' />
              <p className='text-center'>developments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreens
