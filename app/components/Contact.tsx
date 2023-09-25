'use client'
import Link from 'next/link'
import {
  IoMail,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoDocumentText,
} from 'react-icons/io5'

const Contact = () => {
  return (
    <>
      <a
        href="https://docs.carbonblocks.xyz/"
        target="https://docs.carbonblocks.xyz/"
      >
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
          Docs
          <IoDocumentText className="mr-6 md:mr-14" />
        </div>
      </a>
      <a href="mailto:carbonblocks@gmail.com">
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
      </a>
      <Link
        href="https://www.linkedin.com/company/carbonblocks"
        target="https://www.linkedin.com/company/carbonblocks"
      >
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
      </Link>
      <Link
        href="https://twitter.com/0xcarbonblocks"
        target="https://twitter.com/0xcarbonblocks"
      >
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
      </Link>
    </>
  )
}

export default Contact
