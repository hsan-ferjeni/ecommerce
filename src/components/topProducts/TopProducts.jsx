import React from 'react'
import img1 from "../../assets/TopProducts/img1.png"
import img2 from "../../assets/TopProducts/img2.png"
import img3 from "../../assets/TopProducts/img3.png"
import { FaStar } from "react-icons/fa6";



const topProductsList = [
    {
        id:1,
        img: img1,
        title: "Classic T-Shirt",
        Description: "Everyday comfort with a clean, timeless look."
    },
    {
        id:2,
        img: img2,
        title: "Modern Men’s Shirt",
        Description: "Sharp style and effortless elegance for every occasion."
    },
    {
        id:3,
        img: img3,
        title: "Elegant Women’s Shirt",
        Description: "Sophisticated design made to elevate your everyday style."
    }
]
const TopProducts = () => {
  return (
    <div className='dark:bg-gray-900'>
        <div className='mx-4'>
            <h1 className='text-2xl font-bold py-4 dark:text-white'>
                Best Products
            </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4 pb-20'>
            {topProductsList.map((data, index) => (
                <div 
                    key={data.id}
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay={index * 100} 
                    className='flex flex-col items-center bg-gray-200 hover:bg-gray-900 dark:hover:bg-orange-300/80 hover:text-white duration-300 rounded-2xl w-[40%] sm:w-[80%] mt-20 p-2 group'>
                    <img 
                        src={data.img}
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200" 
                        className='-translate-y-20 h-50 group-hover:scale-125'/>
                    <div className='flex -translate-y-20 my-4'>
                        <FaStar className='text-yellow-500 '/>
                        <FaStar className='text-yellow-500 '/>
                        <FaStar className='text-yellow-500 '/>
                        <FaStar className='text-yellow-500 '/>
                        <FaStar className='text-yellow-500 '/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-bold -translate-y-20'>{data.title}</h3>
                        <p className= 'text-left -translate-y-20'>{data.Description}</p>
                    </div>
                    <button className='px-4 py-2 bg-orange-500/70 hover:bg-white hover:text-orange-400 rounded-xl'>
                        Order Now
                    </button>
                </div>
            ))}
        </div>
    </div>
    
  )

}

export default TopProducts