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
            bottom-56 
            text-white 
            font-semibold 
            text-xl 
            md:text-4xl 
            text-center
            "
        >
          Let's Make the Future
          <div
            className="
              font-bold 
              sm:mt-4 
              md:mt-28 
              text-[70px] 
              md:text-[50px] 
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
