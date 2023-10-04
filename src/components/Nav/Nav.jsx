import React from 'react'
import BtnOpenAccount from '../Buttons/BtnOpenAccount'
import Hamburger from '../Buttons/Hamburger'

const Nav = () => {

  const customClasses = "bg-white text-black"

  return (
    <div className='flex justify-between items-center p-4 bg-black text-white'>
        <div className='flex justify-between items-center w-full'>
            <h1 className="text-3xl">Qonto</h1>
            <BtnOpenAccount customClasses={customClasses}/>
        </div>
        <div className='pl-5 '>
            <Hamburger />
        </div>
    </div>
  )
}

export default Nav