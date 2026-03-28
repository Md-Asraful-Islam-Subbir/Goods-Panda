import React from 'react'
import herotv from '../../assets/hero-tv.png'

const Header = () => {
    return (
        <div className='flex justify-between w-full bg-[#f5dede] rounded-lg'>
            <div className='p-10 mt-4'>
                <h1 className='text-6xl font-bold font-poppins'>Mi LED TV 4A PRO 32</h1>
                <p className='text-regular text-gray-500 font-inter mt-2 mb-2 w-[456px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.</p>
                <p className='mt-3 font-poppins font-medium text-4xl text-[#ff2b6a]'>$1289</p>
                <button className='mt-4 px-6 py-2 bg-[#ff2b6a] text-white rounded'>BUY NOW</button>
            </div>
            <img src={herotv} alt="Logo" className="w-[400px] mb-10" />
        </div>
    )
}

export default Header