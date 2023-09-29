import React from 'react'
import { Link } from 'react-router-dom'

const BtnOpenAccount = () => {

    const handleClick = () => {
        return <Link to="../src/Pages/OpenAccount/OpenAccount.jsx"/>
    }

  return (
    <div>
        <button 
          className='text-black bg-white p-1.5 rounded-md text-xs'
          onClick={handleClick}>
            Ouvrir un compte
        </button>
    </div>
  )
}

export default BtnOpenAccount