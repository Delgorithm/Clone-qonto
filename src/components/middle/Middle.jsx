import React from 'react'
import { middleImg, middleText, middleBlogText, proInformation, FaArrowLeft, FaArrowRight, cardPro } from '../data/middleData'
import BtnOpenAccount from '../Buttons/BtnOpenAccount'
import { useState } from 'react'
import BtnDiscoverCards from '../Buttons/BtnDiscoverCards'
import { Link } from 'react-router-dom'


const Middle = () => {

  const customOpenBtn = "bg-black text-white p-4 w-full";

  const customDiscoverCardBtn = 'p-4 rounded-lg flex items-center bg-black border-solid border-2 border-white-600 cursor-pointer hover:text-black hover:bg-white hover:border-black';

  const [isButtonVisible, setIsButtonVisible] = useState(false);

//   const [isTurn, setIsTurn] = useState(false);


  return (
        <div className='bg-white h-screen rounded-t-2xl py-4 -translate-y-11'>
            {middleImg.map((item, index) => (
                <div>
                    <div key={item.id} className='flex items-center justify-between m-4 py-5 '>
                        <img src={item.img1} alt="" className='w-36'/>
                        <img src={item.img2} alt="" className='w-40'/>
                    </div>
                    <div key={item.id} className='bg-purple-100 relative p-36 z-0'>
                        <img src={item.img3} alt="" className='absolute -left-40 top-20'/>
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
                <button className='flex flex-col justify-center items-center p-6 w-screen hover:scale-105 transition duration-500 ease-in-out'>
                    <div key={item.id}>
                        <div>
                            {item.id === 1 && <img src={item.img} className='rounded-t-lg'/>}
                            <div className='flex'>
                                {item.id === 1 && <p className={`flex items-center gap-4 w-full text-xl text-white ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p>}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 2 && <img src={item.img} className='rounded-t-lg'/>}
                            <div className='flex'>
                                {item.id === 2 && <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p>}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 3 && <img src={item.img} className='rounded-t-lg'/>}
                            <div className='flex'>
                                {item.id === 3 && <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p>}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 4 && <img src={item.img} className='rounded-t-lg'/>}
                            <div className='flex'>
                                {item.id === 4 && <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p>}
                            </div>
                        </div>
                    </div>

                    <div key={item.id}>
                        <div>
                            {item.id === 5 && <img src={item.img} className='rounded-t-lg'/>}
                            <div className='flex'>
                                {item.id === 5 && <p className={`flex items-center gap-4 w-full text-xl ${item.bg} p-4 rounded-b-lg`}>{item.text} <FaArrowRight /></p>}
                            </div>
                        </div>
                    </div>

                    {!isButtonVisible && item.id === 5 && (
                        <div className='my-4 w-full'>
                            <BtnOpenAccount customOpenBtn={customOpenBtn}/>
                        </div>
                    )}

                </button>
            ))}
            
            {middleImg.map((item, index) => (
                <div key={item.id}>
                    <div className='relative'>
                        <img src={item.img10} alt="" className='absolute top-[16.38em] right-32' />
                        <img src={item.img11} alt="" className='absolute' />
                        <img src={item.img12} alt="" className='absolute top-[23.7em] w-64 left-[9.7em]' />
                    </div>
                    <div className='text-white bg-black h-[32em] flex justify-center items-center'>
                        <BtnDiscoverCards customDiscoverCardBtn={customDiscoverCardBtn}/>
                    </div>
                </div>
            ))}

            <div className='p-4 h-screen'>
                {proInformation.map((item, index) => (
                    <div key={item.id}>
                        <div className='flex flex-col items-center justify-center pt-8'>
                            {item.id === 1 && <h2 className='text-4xl text-center px-8'>{item.text}</h2>}
                            {item.id === 2 && <p>{item.text}</p>}
                        </div>
                        <div>
                            {item.id === 3 && <p className='text-2xl'>{item.text}</p>}
                        </div>
                        <div className='flex justify-between items-center'>
                            {item.id === 4 && <p className='flex items-center gap-2 underline cursor-pointer'>{item.text} <FaArrowRight /></p>}
                            {item.id === 4 && (
                                <div className='flex items-center gap-5'>
                                    <FaArrowLeft className='cursor-pointer' />
                                    <FaArrowRight className='cursor-pointer' />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                
                <div className='flex gap-10 py-4 w-full overflow-x-auto -translate-y-24'>
                    {cardPro.map((item, index) => (
                        <div 
                            key={item.id}
                            className='hover:scale-105 duration-100 ease-in-out'
                        >
                            
                            {item.id === 1 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-1 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                            {item.id === 2 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-3 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                            {item.id === 3 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-3 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                            {item.id === 4 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-3 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                            {item.id === 5 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-3 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                            {item.id === 6 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-3 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                            {item.id === 7 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-3 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                            {item.id === 8 && (
                                <div className='bg-cyan-100 w-72 flex flex-col justify-center items-center rounded-lg border-solid border-2 border-gray-400'>
                                    <p className='text-center p-1 rounded-t-lg border-b-2 border-gray-400 w-full'>{item.title}</p>
                                    <img src={item.img} alt="" className='w-36' />
                                    <p className='text-xl p-2'>{item.subtitle}</p>
                                    <p className='text-center text-xs pb-2 text-gray-400'>{item.text}</p>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Middle