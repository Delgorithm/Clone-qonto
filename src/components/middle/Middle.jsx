import React from 'react'
import { middleImg, middleText, middleBlogText, pro, cardPro, FaArrowLeft, FaArrowRight } from '../data/middleData'
import BtnOpenAccount from '../Buttons/BtnOpenAccount'
import { useState } from 'react'


const Middle = () => {

  const customClasses = "bg-neutral-950 text-white p-4 w-full"

    const [isButtonVisible, setIsButtonVisible] = useState(false);

  return (
    <div>
        <div className='bg-white h-screen rounded-t-2xl py-4 -translate-y-11'>
            {middleImg.map((item, index) => (
                <div>
                    <div key={item.id} className='flex items-center justify-between m-4 py-5 '>
                        <img src={item.img1} alt="" className='w-36'/>
                        <img src={item.img2} alt="" className='w-40'/>
                    </div>
                    <div key={item.id} className='bg-purple-100 relative p-36 z-0'>
                        <img src={item.img3} alt="" className='absolute -left-40 top-20'/>
                        {/* <img src={item.img4} alt="" className='absolute left-60 -top-10 '/> */}
                    </div>
                </div>
            ))}
            {middleText.map((item, index) => (
                <div className='m-6'>
                    <div key={item.id}>
                        <h2 className='text-3xl'>{item.text}</h2>
                    </div>
                </div>
            ))}
            {middleBlogText.map((item, index) => (
                <button className='flex flex-col justify-center items-center p-4 w-screen'>
                    <div key={item.id}>
                        <div>
                            {item.id === 1 ? <img src={item.img} className='rounded-t-lg'/> : null}
                            <div className='flex'>
                                {item.id === 1 ? <p className={`flex items-center gap-4 w-full text-xl text-white ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p> : null}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 2 ? <img src={item.img} className='rounded-t-lg'/> : null}
                            <div className='flex'>
                                {item.id === 2 ? <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p> : null}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 3 ? <img src={item.img} className='rounded-t-lg'/> : null}
                            <div className='flex'>
                                {item.id === 3 ? <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p> : null}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 4 ? <img src={item.img} className='rounded-t-lg'/> : null}
                            <div className='flex'>
                                {item.id === 4 ? <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p> : null}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 5 ? <img src={item.img} className='rounded-t-lg'/> : null}
                            <div className='flex'>
                                {item.id === 5 ? <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p> : null}
                            </div>
                        </div>
                    </div>
                    {!isButtonVisible && item.id === 5 && (
                        <div className='my-4 w-full '>
                            <BtnOpenAccount customClasses={customClasses}/>
                        </div>
                    )}
                </button>
            ))}
        </div>
    </div>
  )
}

export default Middle