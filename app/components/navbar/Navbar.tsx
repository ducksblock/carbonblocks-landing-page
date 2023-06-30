'use client'

import { Link } from 'react-scroll'
import Container from '../Container'
import Button from './Button'
import Logo from './Logo'
import { useState } from 'react'
import UserMenu from './UserMenu'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(false)

  return (
    <div
      className="
        fixed 
        w-full 
        bg-white/50
        z-10
        shadow-sm
        backdrop-blur-xl
      "
    >
      <div
        className="
          py-4 
          border-b-[4]
        "
      >
        <div className={click ? 'active' : ''}>
          <Container>
            <div
              className="
                flex 
                flex-row 
                items-center 
                justify-between 
                gap-3 
                md:gap-0
                cursor-pointer  
              "
            >
              <Link
                to="marquee"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Logo />
              </Link>

              <Link
                to="mission"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={handleClick}
              >
                <div
                  className="
                  hover:text-green-400
                    rounded-xl
                    font-semibold 
                    py-3
                    px-5
                  "
                >
                  Mission
                </div>
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={handleClick}
              >
                <div
                  className="
                    hover:text-green-400
                    rounded-xl
                    font-semibold 
                    py-3
                    px-5
                    focus:bg-black
                    focus:text-white
                  "
                >
                  About
                </div>
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={handleClick}
              >
                <div
                  className="
                    hover:text-green-400
                    rounded-xl
                    font-semibold 
                    py-3
                    px-5
                    focus:bg-black
                    focus:text-white
                  "
                >
                  Contact
                </div>
              </Link>
              <Button />
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Navbar
