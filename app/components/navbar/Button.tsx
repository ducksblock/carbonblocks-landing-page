import React from 'react'

const Button = () => {
  return (
    <div
      className="
        flex
        flex-row
        items-center 
        gap-3
      "
    >
      <div
        className="
          p-4 
          md:px-6 
          md:py-2 
          text-sm
          font-medium
          items-center 
          md:gap-3 
          rounded-full
          md:rounded-full
          bg-black
          text-white
          hover:bg-white
          border-[1px]
          hover: border-black
          hover:text-black
          cursor-pointer
          btn-effect
        "
      >
        Launch App
      </div>
    </div>
  )
}

export default Button
