'use client'
import { IoMail, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

const Contact = () => {
  return (
    <>
      <div
        className="
          scroll-smooth
          text-[40px]
          md:text-[60px]
          py-2
          pl-6
          md:pl-14
          bg-black
          text-white
          hover:bg-white
          hover:pl-10
          hover:md:pl-20
          hover:text-black
          cursor-pointer
          btn-effect
          border-t-2
          border-neutral-700
          flex
          justify-between
          items-center
        "
      >
        Email
        <IoMail className="mr-6 md:mr-14" />
      </div>
      <div
        className="
          scroll-smooth
          text-[40px]
          md:text-[60px]
          py-2
          pl-6
          md:pl-14
          bg-black
          text-white
          hover:bg-white
          hover:pl-10
          hover:md:pl-20
          hover:text-black
          cursor-pointer
          btn-effect
          border-t-2
          border-neutral-700
          flex
          justify-between
          items-center
        "
      >
        LinkedIn
        <IoLogoLinkedin className="mr-6 md:mr-14" />
      </div>
      <div
        className="
          scroll-smooth
          text-[40px]
          md:text-[60px]
          py-2
          pl-6
          md:pl-14
          bg-black
          text-white
          hover:bg-white
          hover:pl-10
          hover:md:pl-20
          hover:text-black
          cursor-pointer
          btn-effect
          border-t-2
          border-neutral-700
          flex
          justify-between
          items-center
        "
      >
        Twitter
        <IoLogoTwitter className="mr-6 md:mr-14" />
      </div>
    </>
  )
}

export default Contact
