import React from 'react'
import img from "../../assets/products/img4.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";



const Banner = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white grid grid-cols-1 sm:grid-cols-2 place-items-center pb-20 gap-6'>
        <div>
            <img 
                src={img} 
                data-aos='zoom in'
                data-aos-duration='800'
                data-aos-delay='200'
                className='h-80 w-80 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'/>
        </div>
        <div 
            data-aos='fade-left'
            data-aos-duration='800'
            data-aos-delay='200'
            className='flex flex-col gap-6 px-2 '>
            <h1 className='font-bold text-3xl'>Winter Sale upto 50% Off</h1>
            <p>
                Stay warm and stylish with our winter collection, now available at up to 50% off.
                Discover cozy essentials, timeless layers, and seasonal favorites before the sale ends.
            </p>
            <div className='flex items-center gap-6'>
                <GrSecure className='bg-violet-400/20 p-2 h-10 w-10 rounded-full' />
                <p>Quality Products</p>
            </div>
            <div className='flex items-center gap-6'>
                <IoFastFood className='bg-orange-400/20 p-2 h-10 w-10 rounded-full' />
                <p>Fast Delivery</p>
            </div>
            <div className='flex items-center gap-6'>
                <GiFoodTruck className='bg-green-400/20 p-2 h-10 w-10 rounded-full' />
                <p>Eazy Payment method</p>
            </div>
            <div className='flex items-center gap-6'>
                <GiFoodTruck className='bg-yellow-400/20 p-2 h-10 w-10 rounded-full' />
                <p>Get Offers</p>
            </div>
        </div>
    </div>
  )
}

export default Banner