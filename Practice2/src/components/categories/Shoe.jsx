import React from 'react'
import shoe1 from '../../assets/shoe-1.png'
import shoe2 from '../../assets/shoe-2.png'
import shoe3 from '../../assets/shoe-3.png'

const Shoe = () => {
    return (
        <div className='flex flex-col justify-between w-full mt-10'>
            <h3 className='text-2xl font-semibold font-poppins '>Shoes</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='bg-white shadow-lg h-[532px] rounded-xl p-5 hover:shadow-xl transition'>
                    <img src={shoe1} alt="Shoe 1" className="w-full h-[202px] mt-4 mb-4" />
                    <div className='mb-4 mt-4'>
                    <h3 className='font-semibold font-poppins text-2xl text-center text-[#1F1F1F] mb-4'>Reebok Dart Men's Shoes</h3>
                    <p className='font-regular font-inter text-base text-center text-[#4E4E4E] mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    <h4 className='font-medium font-poppins text-2xl text-center text-[#000000] mt-2 mb-2'>$1289</h4>
                    <button className='mt-4 ml-25 px-5 py-3.5 bg-[#000000] text-white rounded'>BUY NOW →</button>
                    </div>
                </div>

                <div className='bg-white shadow-lg h-[532px] rounded-xl p-5 hover:shadow-xl transition'>
                    <img src={shoe2} alt="Shoe 2" className="w-full h-[202px] mt-4 mb-4" />
                    <div className='mb-4 mt-4'>
                    <h3 className='font-semibold font-poppins text-2xl text-center text-[#1F1F1F] mb-4'>Reebok Pump</h3>
                    <p className='font-regular font-inter text-base text-center text-[#4E4E4E] mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    <h4 className='font-medium font-poppins text-2xl text-center text-[#000000] mt-2 mb-2'>$799</h4>
                    <button className='mt-4 ml-25 px-5 py-3.5 bg-[#000000] text-white rounded'>BUY NOW →</button>
                </div>
                </div>

                <div className='bg-white shadow-lg h-[532px] rounded-xl p-5 hover:shadow-xl transition'>
                    <img src={shoe3} alt="Shoe 3" className="w-full h-[202px] mt-4 mb-4" />
                    <div className='mb-4 mt-4'>
                    <h3 className='font-semibold font-poppins text-2xl text-center text-[#1F1F1F] mb-4'>Reebok All Terrain</h3>
                    <p className='font-regular font-inter text-base text-center text-[#4E4E4E] mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    <h4 className='font-medium font-poppins text-2xl text-center text-[#000000] mt-2 mb-2'>$699</h4>
                    <button className='mt-4 ml-25 px-5 py-3.5 bg-[#000000] text-white rounded'>BUY NOW →</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Shoe