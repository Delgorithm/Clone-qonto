import React from 'react'

const BtnDiscoverCards = ({ toggle }) => {
  return (
    <button
        className='p-4 rounded-lg flex items-center bg-red-400 border-solid border-2 border-white-600 cursor-pointer hover:text-black hover:bg-white hover:border-black'
        onClick={toggle}
    >
        Découvrir nos cartes

    </button>
  )
}

export default BtnDiscoverCards