import React from 'react'
import { Link } from 'react-router-dom'
import OpenAccount from '../../Pages/OpenAccount/OpenAccount'

const BtnOpenAccount = ({ customOpenBtn }) => {

  const buttonClasses =`p-1.5 rounded-md text-xs active:opacity-80 active:translate-y-0.5 ${customOpenBtn}`;

  return (
    <Link to="/OpenAccount">
        <button className={buttonClasses}>
            Ouvrir un compte
        </button>
    </Link>
  );
}

export default BtnOpenAccount