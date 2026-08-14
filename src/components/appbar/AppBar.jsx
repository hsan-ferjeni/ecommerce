import React from 'react'
import { GiShop } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import NavBar from './NavBar';




const AppBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900">
        <div className="flex bg-orange-200/50 py-2 shadow-md justify-center items-center">
            <div className="container flex items-center justify-between">
                
                {/*Logo and title*/}
                <div>
                    <a href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                        <GiShop className= "ml-2 text-4xl text-orange-400"/>
                        <p className="hidden sm:block">Shopsy</p>
                    </a>
                </div>


                {/*Search input and shop button*/}
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="border border-gray-300 rounded-full w-50 sm:group-hover:w-75 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 group-hover:border-orange-400 duration-200 relative z-40"/>
                        <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-orange-400 z-50"/>
                    </div>
                    <div>
                        <button 
                            onClick={() => alert('Order button clicked!')}
                            className="bg-orange-300 py-2 px-4 rounded-full flex items-center text-white gap-4 group"
                            >
                            <span className="sm:group-hover:block hidden transition-all duration-1000">Order</span>
                            <FaCartShopping className="text-2xl group-hover:py-0" />
                        </button>
                    </div>
                    <DarkMode/>
                </div>
                
            </div>
            
        </div>
        <NavBar className="hidden sm:block" />
    </div>
    
  )
}

export default AppBar