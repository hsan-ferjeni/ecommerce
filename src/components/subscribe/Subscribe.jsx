import React from 'react'
import img from '../../assets/subscribe/img.webp'
import { MdHeight } from 'react-icons/md'


const BannerImg = {
  backgroundImage: `url(${img})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  height: "100%",
  width:"100%",
}
const Subscribe = () => {
  return (
    <div
      data-aos='zoom in'
      data-aos-duration='800'
      data-aos-delay='200'
      className='dark:bg-gray-900 text-white flex items-center justify-center p-4'
      style={BannerImg}>
      <div className='flex flex-col items-center justify-center max-w-md gap-4'>
        <h1 
          data-aos='fade-right'
          data-aos-duration='800'
          data-aos-delay='200'
          className='text-2xl font-bold text-center'>Get Notified About New Products</h1>
        <input
          data-aos='fade-left'
          data-aos-duration='800'
          data-aos-delay='200' 
          type='text'
          placeholder='Enter your email'
          className='w-full p-3 bg-white text-gray-500'
          />
        
      </div>
    </div>
  )
}

export default Subscribe