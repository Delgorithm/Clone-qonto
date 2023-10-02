import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

const BtnAccordion = ({ text, open, toggle }) => {
  return (
    <button
        className="p-4 rounded-lg w-full flex justify-between items-center"
        onClick={toggle}
    >
        {text}
        {open ? <FaAngleUp /> : <FaAngleDown />}
    </button>
  )
}

export default BtnAccordion