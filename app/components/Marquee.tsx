'use client'

const Marquee = () => {
  return (
    <>
      {/* min-h-screen */}
      <div
        className="
          flex 
          items-center 
          justify-center
        "
      >
        <div
          className="
            relative 
            w-full
          "
        >
          {/* Background Circles */}

          <div
            className="
              absolute 
              top-32 
              left-1/4 
              w-60
              md:w-80 
              h-80 
              bg-purple-300 
              rounded-full 
              filter 
              blur-xl 
              opacity-70 
              animate-blob
            "
          ></div>
          <div
            className="
              absolute 
              top-64
              md:top-48 
              right-1/3 
              w-60
              md:w-96 
              h-96 
              bg-green-300 
              rounded-full 
              filter 
              blur-xl 
              opacity-70 
              animate-blob
              "
          ></div>
          <div
            className="
              absolute 
              bottom-28
              md:bottom-14
              md:right-2/4
              w-60
              md:w-80 
              h-80 
              bg-yellow-300 
              rounded-full 
              filter 
              blur-xl 
              opacity-70 
              animate-blob
              "
          ></div>

          {/* Tagline Marquee */}

          <div
            id="marquee"
            className="
              relative
              overflow-hidden 
              flex 
              justify-start
              items-center
              h-[calc(100dvh)]
            "
          >
            <div
              className="
                block
                absolute
                h-[10px]
                w-full
                border-effect
                bottom-0
              "
            ></div>
            <div
              className="
                py-24 
                animate-marquee 
                whitespace-nowrap
              "
            >
              <span
                className="
                  p-24 
                  text-5xl
                  md:text-[90px]
                  lg:text-[150px]
                  font-medium
                "
              >
                Decarbonizing the Planet
              </span>
            </div>
            <div
              className="
                py-24 
                animate-marquee 
                whitespace-nowrap
              "
            >
              <span
                className="
                  p-24
                  text-5xl
                  md:text-[90px]
                  lg:text-[150px]
                  font-medium
                "
              >
                Decarbonizing the Planet
              </span>
            </div>
            <div
              className="
                py-24 
                animate-marquee 
                whitespace-nowrap
              "
            >
              <span
                className="
                  p-24
                  text-5xl
                  md:text-[90px]
                  lg:text-[150px]
                  font-medium
                "
              >
                Decarbonizing the Planet
              </span>
            </div>
            <div
              className="
                py-24 
                animate-marquee 
                whitespace-nowrap
              "
            >
              <span
                className="
                  p-24  
                  text-5xl
                  md:text-[90px]
                  lg:text-[150px]
                  font-medium
                "
              >
                Decarbonizing the Planet
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Marquee
