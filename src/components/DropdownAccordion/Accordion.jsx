import React, { useState } from 'react'
import { 
  FaAngleDown,
  FaAngleUp
} from "react-icons/fa6"
import AccordionText from "../data/AccordionText"


const Accordion = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex flex-col gap-2'>

      <button 
        className='bg-cyan-100 p-4 rounded-lg flex justify-between items-center cursor-pointer'
        onClick={toggleAccordion}
      >
        Compte pro & Cartes

        {!isOpen ? (
          <FaAngleDown />
        ) : (
          <FaAngleUp />
        )}
      </button>
        {isOpen && (
          <div className="bg-cyan-100">
          </div>
        )}

      <button className='bg-yellow-100 p-4 rounded-lg flex justify-between items-center cursor-pointer'>
        Factures clients et fournisseurs
        <FaAngleDown /> 
      </button>

      <button className='bg-purple-200 p-4 rounded-lg flex justify-between items-center cursor-pointer'>
        Gestion des dépenses d'équipe
        <FaAngleDown /> 
      </button>

      <button className='bg-orange-200 p-4 rounded-lg flex justify-between items-center cursor-pointer'>
        Comptabilité & Reporting
        <FaAngleDown /> 
      </button>

    </div>
  )
}

export default Accordion