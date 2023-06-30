'use client'

import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      alt="Logo"
      height={120}
      width={120}
      src="/assets/cb-logo-b.svg"
      className="
        md:block 
        cursor-pointer
      "
    />
  )
}

export default Logo
