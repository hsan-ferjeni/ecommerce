import React from 'react'
import bgimg from '../../assets/footer/bgimg.png'
import { GiShop } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";




const Links = [
  "Home",
  "Shop",
  "Women",
  "Men",
  "Collections",
  "Sale",
  "About Us",
  "Contact"
]

const TopLinks = [
  "New Arrivals",
  "Best Sellers",
  "Offers",
  "Track Order",
  "Wishlist",
  "My Account"
]

const Footer = () => {
  return (
    <div className='relative bg-gray-900 h-75 flex flex-col justify-end mt-20'>
  <div 
    className='w-full h-40 bg-repeat-x'
    style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: '400px 100%'
    }}
  >
  </div>
  <div className=' absolute top-0 left-0 w-full h-full text-white flex justify-between px-8 py-6'>
    <div className=' hidden  sm:flex flex-col w-[20%] gap-4'>
      <a href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
        <GiShop className="ml-2 text-4xl text-orange-400"/>
        <p>Shopsy</p>
      </a>
      <p>
        A modern online shopping experience offering stylish fashion, quality essentials, and great deals for everyone.
      </p>
    </div>
    <div className='flex flex-col w-[20%] gap-4'>
      <h1 className="flex items-center gap-2 text-2xl font-bold text-white">Top Links</h1>
      <ul>
        {TopLinks.map((data) => (
          <li key={data} className='cursor-pointer hover:text-orange-400 hover:translate-x-1 '>{data}</li>
        ))}
      </ul>
    </div>
    <div className='flex flex-col w-[20%] gap-4'>
      <h1 className="flex items-center gap-2 text-2xl font-bold text-white">Links</h1>
      <ul>
        {Links.map((data) => (
          <li key={data} className='cursor-pointer hover:text-orange-400 hover:translate-x-1 '>{data}</li>
        ))}
      </ul>
    </div>
    <div className='flex flex-col w-[20%] gap-8'>
        <div className='flex gap-2 translate-x-3'>
            <FaFacebook  className='text-3xl'/>
            <FaSquareInstagram className='text-3xl'/>
            <FaLinkedin className='text-3xl'/>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='hidden sm:flex items-center gap-2'>
                <FaTelegramPlane className='text-2xl'/>
                <p>for more information</p>
            </div>
            <div className='hidden sm:flex items-center gap-2'>
                <MdOutlinePhoneAndroid className='text-2xl'/>
                <p>+216 44 557 144</p>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}

export default Footer