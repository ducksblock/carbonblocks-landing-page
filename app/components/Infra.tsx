'use client'
import { IoFlash, IoLeaf, IoCar } from 'react-icons/io5'

const Infra = () => {
  return (
    <div
      id="infra"
      className="
        text-4xl
        md:text-5xl
        font-medium
        text-center
        py-20
        border-b-[2px] 
        border-neutral-500
      "
    >
      Infrastructure of the Future
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          md:gap-x-10 
          xl-grid-cols-4 
          gap-y-10 
          gap-x-6 
          m-10
          "
      >
        <div
          className="
            pt-20 
            mx-auto 
            text-2xl
            md:text-3xl 
            font-semibold
            "
        >
          <div
            className="
              flex 
              justify-center 
              pb-5
              "
          >
            <div
              className="
                bg-yellow-500 
                w-14 
                h-14 
                rounded-full 
                flex 
                justify-center 
                items-center
                "
            >
              <IoFlash size={35} className="text-white" />
            </div>
          </div>
          Energy Efficiency
          <div
            className="
              pt-2
              text-lg
              md:text-xl
              font-normal
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div
          className="
            pt-20 
            mx-auto 
            text-2xl
            md:text-3xl 
            font-semibold
            "
        >
          <div
            className="
              flex 
              justify-center 
              pb-5
              "
          >
            <div
              className="
                bg-green-500 
                w-14 
                h-14 
                rounded-full 
                flex 
                justify-center 
                items-center
                "
            >
              <IoLeaf size={35} className="text-white" />
            </div>
          </div>
          Sustainable Solutions
          <div
            className="
              pt-2
              text-lg
              md:text-xl
              font-normal
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div
          className="
            pt-20 
            mx-auto
            text-2xl 
            md:text-3xl 
            font-semibold
            "
        >
          <div
            className="
              flex 
              justify-center 
              pb-5
              "
          >
            <div
              className="
                bg-violet-600 
                w-14 
                h-14 
                rounded-full 
                flex 
                justify-center 
                items-center
                "
            >
              <IoCar size={35} className="text-white" />
            </div>
          </div>
          Electric Mobility
          <div
            className="
              pt-2
              text-lg
              md:text-xl
              font-normal
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infra
