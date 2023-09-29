import React from 'react'
import BtnOpenAccount from '../Buttons/BtnOpenAccount'
import Hamburger from '../Buttons/Hamburger'

const Nav = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-black text-white'>
        <div className='flex justify-between items-center w-full'>
            <h1 className="text-3xl">Qonto</h1>
            <BtnOpenAccount />
        </div>
        <div className='pl-5 '>
            <Hamburger />
        </div>
    </div>
  )
}

export default Nav