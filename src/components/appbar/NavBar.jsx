import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Top Rated",
        path: "/top-rated"
    },
    {
        name: "Kids Wear",
        path: "/kids-wear"
    },
    {
        name: "Men Wear",
        path: "/men-wear"
    },
    {
        name: "Electronics",
        path: "/electronics"
    }

];
const dropdownlinks =[
    {
        id:1,
        name: "Trending Products",
        path: "/trending-products"
    },
    {
        id:2,
        name: "Best Selling",
        path: "/best-selling"
    },
    {
        id:3,
        name: "Top Rated",
        path: "/top-rated"
    }
]

const NavBar = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() =>{
        const handelClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsOpen(false);
            }
    };
    document.addEventListener("mousedown", handelClickOutside);
    return () => {
        document.removeEventListener("mousedown", handelClickOutside);
    };
}, []);
    return (
        <div className={className}>
            <nav className={`flex bg-gray-100 dark:bg-gray-800 shadow-md ${className}`}>
                <div className="container mx-auto flex items-center justify-center">
                    <div className="flex items-center w-full lg:w-[60%] py-2 ">
                        <div className="flex items-center justify-between w-full">
                            {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300">
                                {link.name}
                            </Link>
                            ))}
                        </div>
                        <div ref={dropdownRef} className="ml-8 flex">
                            <button onClick={() => setIsOpen(!isOpen)} className ="flex items-center dark:text-gray-200 transition-all duration-300 group">
                                Trending
                                <RiArrowDropDownLine  className="h-5 w-5"/>
                            </button>
                            {isOpen &&(
                                <div className="absolute z-9999 bg-gray-100 dark:bg-gray-800 shadow-2xl rounded-md mt-2 w-40">
                                    <ul className="flex flex-col p-2">
                                        {dropdownlinks.map((data) => (
                                            <li key={data.id} className="flex rounded-md text-gray-800 dark:text-gray-200 hover:bg-orange-200 dark:hover:bg-orange-400 justify-center transition-all duration-300">
                                                <a href={data.path}>
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>

    )
}

export default NavBar