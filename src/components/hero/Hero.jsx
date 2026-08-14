import React from 'react'
import women from '../../assets/hero/women.png'
import sale from '../../assets/hero/sale.png'
import shop from '../../assets/hero/shop.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const imageList = [
  {
    id: 1,
    img: shop,
    title:"Style Made for Every You",
    description:"Discover carefully selected fashion and essentials designed to match your lifestyle, taste, and every occasion."
  },
  {
    id: 2,
    img: women,
    title:"Elevate Your Everyday Style",
    description:"Discover the latest women's fashion designed for confidence, comfort, and elegance. Explore trendy outfits, timeless essentials, and exclusive collections for every occasion."
  },
  {
    id: 3,
    img: sale,
    title:"Up to 70% Off — Don’t Miss Out",
    description:"Refresh your style with incredible savings across our most-loved collections, now up to 70% off."
  }
]



const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-137 sm:min-h-162.5 bg-gray-200  dark:bg-gray-800 dark:text-white duration-200 -z-10">
      {/* back ground */}
      <div className="flex justify-center">
        <div className="h-175 w-175  bg-orange-200/40 rounded-3xl absolute -top-90 translate-x-[10%] rotate-45 -z-9"></div>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{delay:3000}}
        slidesPerView={1}
      >
        {imageList.map((data) =>(
        <SwiperSlide>
          
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center px-4 py-8 text-center">
              <img 
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200" 
                src={data.img} 
                alt="Women" 
                className="h-75 w-75 object-cover sm:order-2"/>
              <div className="flex flex-col items-center gap-4 w-75">
                <h1
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200" 
                  className="text-5xl font-bold">{data.title}</h1>
                <p 
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="200" 
          
                  className="text-lg">{data.description}</p>
                <button
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="200" 

                  className="bg-orange-500/70 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          
        </SwiperSlide>
        ))}
        
        
      </Swiper>

      
    </div>
  )
}

export default Hero;