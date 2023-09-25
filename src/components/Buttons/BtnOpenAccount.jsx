import React from 'react'
import { Link } from 'react-router-dom'

const BtnOpenAccount = () => {

    const handleClick = () => {
        return <Link to="../src/Pages/OpenAccount/OpenAccount.jsx"/>
    }

  return (
    <div>
        <button onClick={handleClick}>
            Ouvrir un compte
        </button>
    </div>
  )
}

export default BtnOpenAccount