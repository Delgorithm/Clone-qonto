import React from 'react'
import { Link } from 'react-router-dom'
import OpenAccount from '../../Pages/OpenAccount/OpenAccount'

const BtnOpenAccount = () => {

  return (
    <Link to="/OpenAccount">
        <button className='text-black bg-white p-1.5 rounded-md text-xs active:opacity-80 active:translate-y-0.5'>
            Ouvrir un compte
        </button>
    </Link>
  )
}

export default BtnOpenAccount