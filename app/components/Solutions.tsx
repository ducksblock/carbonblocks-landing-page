'use client'
import Image from 'next/image'

const Solutions = () => {
  return (
    <>
      <div
        className="
          bg-green-400/80
          border-b-[2px]
          border-neutral-100

          "
      >
        <div
          id="about"
          className="
            pt-10 
            text-black 
            font-semibold 
            text-[40px] 
            md:text-[70px] 
            lg:text-[80px] 
            text-center
          "
        >
          <p
            className="
              flex 
              text-white 
              justify-center
              "
          >
            SUPERCHARGE
          </p>
          <div
            className="
              text-[25px]
              md:text-[70px]
              lg:text-[80px]
              font-normal
            "
          >
            CLIMATE SOLUTIONS
          </div>
        </div>
        <div
          className="
            relative 
            overflow-hidden
            "
        >
          <div
            className="
              relative 
              overflow-hidden
              "
          >
            <div
              className="
                relative 
                px-6 
                mx-auto 
                max-w-7xl 
                lg:px-8
                "
            >
              <Image
                src="/assets/cb-dapp-ss.png"
                width={960}
                height={540}
                alt="Carbonblocks DApp"
                unoptimized
                className="
                  m-auto 
                  pt-5
                "
              />
              <div
                className="
                  md:absolute 
                  text-center 
                  md:left-20 
                  md:top-28 
                  w-auto 
                  m-2
                  md:p-5 
                  md:bg-neutral-600/50 
                  md:border-2 
                  md:border-neutral-300/30 
                  md:rounded-xl 
                  md:backdrop-blur-md 
                  text-white 
                  text-2xl 
                  font-medium
                "
              >
                <span className="h-2 bg-black md:bg-transparent px-1 rounded-sm">
                  REAL-TIME
                </span>{' '}
                DATA
              </div>
              <div
                className="
                  md:absolute 
                  text-center 
                  md:right-16 
                  md:bottom-24 
                  w-auto
                  m-2 
                  md:p-5 
                  md:bg-neutral-600/50 
                  md:border-2 
                  md:border-neutral-300/30 
                  md:rounded-xl 
                  md:backdrop-blur-md 
                  text-white 
                  text-2xl 
                  font-medium
                  "
              >
                <span className="h-2 bg-black md:bg-transparent px-1 rounded-sm">
                  REAL-TIME
                </span>{' '}
                IMPACT
              </div>
            </div>
          </div>
        </div>
        <div
          className="
            flex 
            justify-center 
            p-9 
            text-2xl 
            md:text-4xl
            "
        >
          <p>
            Go
            <span
              className="
                  font-bold 
                  mx-3
                  "
            >
              Carbon Negative
            </span>
            by investing in
            <span
              className="
                text-white 
                font-bold 
                mx-3
                "
            >
              Zero Carbon Buildings
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Solutions
