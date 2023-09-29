import React from 'react'
import { Link } from 'react-router-dom';
import Offering from '../../Pages/Offering/Offering';

const BtnOffers = () => {
  
  return (
    <Link to="/offering">
      <button className='bg-white p-3 rounded-md my-6 w-full active:opacity-80 active:translate-y-0.5'>
        Découvrir nos offres
      </button>
    </Link>
  )
}

export default BtnOffers