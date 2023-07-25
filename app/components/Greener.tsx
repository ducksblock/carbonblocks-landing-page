'use client'

const Greener = () => {
  return (
    <>
      <div
        className="
          relative 
          flex 
          justify-center 
          items-center
          "
      >
        <video
          autoPlay
          loop
          muted
          className="
            relative 
            min-w-full 
            min-h-full 
            max-w-none
          "
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="
            absolute 
            bottom-10
            md:bottom-40
            lg:bottom-56 
            text-white 
            font-semibold 
            text-xl 
            md:text-2xl
            lg:text-4xl 
            text-center
            "
        >
          Let&apos;s Make the Future
          <div
            className="
              font-bold 
              mt-4 
              md:mt-8
              lg:mt-28 
              text-[70px] 
              md:text-[90px] 
              lg:text-[200px] 
              xl:text-[250px]
              "
          >
            GREENER
          </div>
        </div>
      </div>
    </>
  )
}

export default Greener
