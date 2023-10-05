import React from 'react'
import { Link } from 'react-router-dom'

const BtnDiscoverCards = ({ customDiscoverCardBtn }) => {

  const buttonClasses = 'p-4 rounded-lg flex items-center bg-black border-solid border-2 border-white-600 cursor-pointer hover:text-black hover:bg-white hover:border-black'

  return (
    <Link to="/">
      <button className={buttonClasses}>
          Découvrir nos cartes
      </button>
    </Link>
  )
}

export default BtnDiscoverCards