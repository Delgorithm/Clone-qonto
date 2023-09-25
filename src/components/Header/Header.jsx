import React from 'react'
import BtnOpenAccount from '../Buttons/BtnOpenAccount'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between bg-blue-400 p-3'>
            <div className='flex justify-between w-screen bg-red-400'>
                <p>Qonto</p>
                <BtnOpenAccount />
            </div>
            <div>
                <p>Carré</p>
            </div>
        </div>
    </div>
  )
}

export default Header