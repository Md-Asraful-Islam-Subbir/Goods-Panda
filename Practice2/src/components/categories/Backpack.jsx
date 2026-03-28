import React from 'react'
import bag1 from '../../assets/bag-1.png'
import bag2 from '../../assets/bag-2.png'
import bag3 from '../../assets/bag-3.png'

const Backpack = () => {
    return (
        <div className='flex flex-col justify-between w-full mt-10'>
            <h3 className='text-2xl font-semibold font-poppins '>Backpacks</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='bg-white shadow-lg h-[532px] rounded-xl p-5 hover:shadow-xl transition'>
                    <img src={bag1} alt="bag 1" className="w-full h-[202px] mt-4 mb-4" />
                    <div className='mb-4 mt-4'>
                        <h3 className='font-semibold font-poppins text-2xl text-center text-[#1F1F1F] mb-4'>Ison Backpack</h3>
                        <p className='font-regular font-inter text-base text-center text-[#4E4E4E] mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                        <h4 className='font-medium font-poppins text-2xl text-center text-[#000000] mt-2 mb-2'>$1289</h4>
                        <button className='mt-4 ml-25 px-5 py-3.5 bg-[#000000] text-white rounded'>BUY NOW →</button>
                    </div>
                </div>

                <div className='bg-white shadow-lg h-[532px] rounded-xl p-5 hover:shadow-xl transition'>
                    <img src={bag2} alt="bag 2" className="w-full h-[202px] mt-4 mb-4" />
                    <div className='mb-4 mt-4'>
                        <h3 className='font-semibold font-poppins text-2xl text-center text-[#1F1F1F] mb-4'>Biaowang Backpack</h3>
                        <p className='font-regular font-inter text-base text-center text-[#4E4E4E] mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                        <h4 className='font-medium font-poppins text-2xl text-center text-[#000000] mt-2 mb-2'>$799</h4>
                        <button className='mt-4 ml-25 px-5 py-3.5 bg-[#000000] text-white rounded'>BUY NOW →</button>
                    </div>
                </div>

                <div className='bg-white shadow-lg h-[532px] rounded-xl p-5 hover:shadow-xl transition'>
                    <img src={bag3} alt="bag 3" className="w-full h-[202px] mt-4 mb-4" />
                    <div className='mb-4 mt-4'>
                        <h3 className='font-semibold font-poppins text-2xl text-center text-[#1F1F1F] mb-4'>Dxyizu WS54 Smart</h3>
                        <p className='font-regular font-inter text-base text-center text-[#4E4E4E] mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                        <h4 className='font-medium font-poppins text-2xl text-center text-[#000000] mt-2 mb-2'>$699</h4>
                        <button className='mt-4 ml-25 px-5 py-3.5 bg-[#000000] text-white rounded'>BUY NOW →</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Backpack