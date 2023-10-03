import React, { useState } from 'react';
import ContentAccordion from './ContentAccordion';
import AccordionText from '../data/AccordionText';
import BtnAccordion from '../Buttons/BtnAccordion';

const Accordion = () => {
  const [open, setOpen] = useState(null);

  const toggleContext = (index) => {
    setOpen(open === index ? null : index);
  }

  return (
    <div className='flex flex-col gap-2 '>
      {AccordionText.map((item, index) => (
        <div key={item.id} className={`${item.bg} rounded-lg`}>
          <BtnAccordion text={item.name} open={open === index} toggle={() => toggleContext(index)}/>
          {open === index && (
            <div>
              <ContentAccordion text={item.text}/>
              <div className='w-full flex justify-center bg-white -translate-y-2 '>
                <img src={item.img} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion