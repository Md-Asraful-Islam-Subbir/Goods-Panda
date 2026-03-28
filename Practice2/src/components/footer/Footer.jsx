import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-[#f5dede] w-[1128px] rounded-xl py-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold mb-3 font-poppins">
          LET'S STAY IN TOUCH
        </h2>
        <p className="text-[#707070] mb-6 font-medium font-inter text-base">
          Get updates on sales specials and more
        </p>
        <div className="flex items-center bg-white rounded-lg overflow-hidden w-[400px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 outline-none font-regular font-poppins text-base"
          />
          <button className="bg-pink-500 text-white px-6 py-2 hover:bg-pink-600 transition">
            Send
          </button>
        </div>
      </div>

    </div>
  )
}

export default Footer