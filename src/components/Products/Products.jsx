import React from 'react'
import img1 from '../../assets/products/img1.jpg'
import img2 from '../../assets/products/img2.jpg'
import img3 from '../../assets/products/img3.jpg'
import img4 from '../../assets/products/img4.jpg'
import img5 from '../../assets/products/img5.jpg'
import img6 from '../../assets/products/img6.jpg'
import { FaStar } from "react-icons/fa6";


const ProductsList = [
    {
        id : 1,
        img: img1,
        tiltle: "Classic T-Shirt",
        color:"yellow",
        rate: "4.5"
    },
    {
        id : 2,
        img: img2,
        tiltle: "Casual Sneakers",
        color:"green",
        rate: "5"
    },
    {
        id : 3,
        img: img3,
        tiltle: "Denim Jacket",
        color:"blue",
        rate: "4.6"
    },
    {
        id : 4,
        img: img4,
        tiltle: "Leather Bag",
        color:"pink",
        rate: "4.3"
    },
    {
        id : 5,
        img: img5,
        tiltle: "Summer Dress",
        color:"orange",
        rate: "4.8"
    },
    {
        id : 6,
        img: img6,
        tiltle: "Everyday Hoodie",
        color:"black",
        rate: "4.7"
    }
]

const Products = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white transition-all duration-300'>
        <div className='flex items-center justify-center py-4'>
            <h1 className="text-3xl font-bold">Products</h1>
        </div>
        {/*products card*/}
        
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {ProductsList.map((data, index) => (
                <div 
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 100} 
                    key={data.id} 
                    className='flex flex-col items-center'>
                    <div>
                        <img src={data.img} className='w-37.5 h-50 rounded-2xl'/>
                        <p>{data.tiltle}</p>

                        <p className="text-orange-300"> {data.color}</p>
                        <div className='flex gap-2 items-center'>
                            <FaStar className='text-yellow-500'/>
                            <p>{data.rate}</p>
                        </div> 
                    </div>
                 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products