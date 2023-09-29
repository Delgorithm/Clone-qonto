import React from 'react'
import BtnOpenAccount from '../Buttons/BtnOpenAccount'
import Nav from '../Nav/Nav'
import HeaderText from '../data/HeaderText'
import BtnOffers from '../Buttons/BtnOffers'

const Header = () => {
  return (
    <div>
      <Nav />
      <div className='bg-black h-screen my-0.5 flex flex-col relative z-0'>
        {HeaderText.map((item, i) => (
          <div key={item.id} className='m-4 relative'>
            <h1 className="text-white text-6xl">{item.title}</h1>
            <p className='text-white font-light text-lg'>{item.text}</p>
            {item.id === 2 ? <BtnOffers /> : null}
            <p className='text-gray-100 font-thin text-sm'>{item.subtext}</p>
          </div>
        ))}
        <div>
          <img 
            src="../img/headerimg.png" 
            alt="Image of Qonto's application"
            className='absolute bottom-0 right-0 left-20 opacity-40 -z-10'
          />
        </div>
      </div>
    </div>
  )
}

export default Header