import React, {useState } from 'react'

const Hamburger = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <div className="relative lg:hidden flex">
            <button 
                className='text-white'
                onClick={toggleMenu}
            >
            {!isOpen ? (
                <div className='flex flex-col'>
                    <div className="border-b-2 border-solid border-white w-5 mb-3"></div>
                    <div className="border-b-2 border-solid border-white w-5"></div>
                </div>
            ) : (
                <div className='flex flex-col'>
                    <div className="border-b-2 border-solid border-white w-5 mb-4 origin-center rotate-45 translate-y-2"></div>
                    <div className="border-b-2 border-solid border-white w-5 origin-center rotate-[-45deg] -translate-y-2.5"></div>
                </div>
            )}
            </button>

            {isMenuVisible && (
                <div className='fixed inset-x-0 top-16 bg-blue-500 w-screen h-screen z-50'>
                    <p>test</p>
                </div>
            )}

        </div>
    )
}

export default Hamburger