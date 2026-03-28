import React from 'react'
import categoryBag from '../../assets/category-bag.png'
import categoryShoe from '../../assets/category-shoe.png'
import categoryWatch from '../../assets/category-watch.png'

const Categories = () => {
    return (
        <div className='flex flex-col justify-between w-full mt-10'>
            <h3 className='text-2xl font-semibold font-poppins '>Categories</h3>
            <div className=' grid grid-cols-3 gap-4 mt-4'>
                <div className='bg-[#ff9a44] flex items-center justify-between p-8 rounded-lg w-full h-[120px]'>
                    <h4 className='text-white font-medium font-poppins text-4xl'>Watch</h4>
                    <img src={categoryWatch} alt="Logo" className="w-15" />
                </div>
                <div className='bg-[#ff2b6a] flex items-center justify-between p-8 rounded-lg w-full h-[120px]'>
                    <h4 className='text-white font-medium font-poppins text-4xl'>Bag</h4>
                    <img src={categoryBag} alt="Logo" className="w-20" />
                </div>
                <div className='bg-[#4b00ff] flex items-center justify-between p-8 rounded-lg w-full h-[120px]'>
                    <h4 className='text-white font-medium font-poppins text-4xl'>Shoes</h4>
                    <img src={categoryShoe} alt="categoryShoe" className="w-32" /></div>
            </div>
        </div>
    )
}

export default Categories