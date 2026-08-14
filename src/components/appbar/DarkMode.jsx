import React, { useState, useEffect } from 'react';
import lightButton from '../../assets/light_button.png';
import darkButton from '../../assets/dark_button.png';

const DarkMode = () => {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);


    return (
        <div 
            className="relative w-20 h-10 cursor-pointer"
            onClick={() => setDark(!dark)}
        >
            <img 
                src={lightButton}
                alt="Light Mode"
                className={`
                    absolute h-10
                    transition-all duration-300
                    ${dark ? "opacity-0 " : "opacity-100"}
                `}
            />

            <img 
                src={darkButton}
                alt="Dark Mode"
                className={`
                    absolute  h-10
                    transition-all duration-300
                    ${dark ? "opacity-100" : "opacity-0"}
                `}
            />
        </div>
    );
}

export default DarkMode;