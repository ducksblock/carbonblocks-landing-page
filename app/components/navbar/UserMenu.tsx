'use client'

import { useState, useCallback } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import MenuItem from './MenuItem'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div
      onClick={toggleOpen}
      className="
        md:hidden 
        block 
        p-4 
        md:px-2 
        md:py-2 
        border-[1px] 
        border-neutral-200 
        flex-row 
        items-center 
        gap-3 
        rounded-full 
        hover:shadow-md 
        cursor-pointer 
        transition
      "
    >
      <IoMenu />
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md 
            w-[40vw] 
            md:w-full 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div
            className="
              flex 
              flex-col 
              cursor-pointer
            "
          >
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
