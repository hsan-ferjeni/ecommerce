import React from 'react'
import img1 from '../../assets/Testimonials/img1.jpg'
import img2 from '../../assets/Testimonials/img2.jpg'
import img3 from '../../assets/Testimonials/img3.jpg'
import img4 from '../../assets/Testimonials/img4.jpg'
import img5 from '../../assets/Testimonials/img5.jpg'
import img6 from '../../assets/Testimonials/img6.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialList = [
  {
    id: 1,
    img: img1,
    name: "Amelia Carter",
    comment: "Amazing quality and a smooth shopping experience. I absolutely love my purchase!"
  },
  {
    id: 2,
    img: img2,
    name: "Liam Anderson",
    comment: "Great products, fast delivery, and everything arrived exactly as described."
  },
  {
    id: 3,
    img: img3,
    name: "Sophia Martin",
    comment: "I’m really happy with my order. The quality is even better than I expected!"
  },
  {
    id: 4,
    img: img4,
    name: "Noah Williams",
    comment: "The website is easy to use and the products are stylish and affordable."
  },
  {
    id: 5,
    img: img5,
    name: "Olivia Brown",
    comment: "A wonderful shopping experience from start to finish. I’ll definitely order again!"
  },
  {
    id: 6,
    img: img6,
    name: "Ethan Wilson",
    comment: "Excellent service and great quality. My order arrived quickly and looked perfect."
  }
]

const Testimonials = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <div className='flex items-center justify-center py-4'>
            <h1 className="text-3xl font-bold">Testimonials</h1>
      </div>
      <div
        data-aos='zoom in'
        data-aos-duration='800'
        data-aos-delay='200'>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{delay:6000}}
          spaceBetween={16}
          slidesPerView="auto"
          pagination={{clickable: true}}
          className='pb-10! px-4! sm:px-8!'
          style={{
            '--swiper-pagination-color': '#f97316',
            '--swiper-pagination-bullet-inactive-color': '#f97316',
            '--swiper-pagination-bullet-inactive-opacity': '0.3',
          }}
        >
          {TestimonialList.map((data) => (
            
              <SwiperSlide key={data.id} className='w-full! sm:w-1/2! lg:w-1/3! h-auto!'>
                <div className='flex flex-col justify-center bg-orange-300/20 p-4  dark:bg-orange-400 rounded-2xl gap-4 h-full'>
                  <p className='absolute text-black/50 dark:text-white right-5 top-5 text-7xl font-serif'>,,</p>
                  <img src={data.img} className='h-15 w-15 rounded-full opacity-60 dark:opacity-100'/>
                  <p>{data.comment}</p>
                  <h1 className='font-bold font-serif'>{data.name}</h1>
                </div>
              </SwiperSlide>
         
          ))}
          
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials