'use client'

const CallToAction = () => {
  return (
    <>
      <div
        className="
          bg-black 
          p-20
          "
      >
        <div
          className="
            text-center 
            font-bold 
            text-xl 
            md:text-5xl 
            text-white
          "
        >
          <div>
            <span
              className="
                pt-5
                "
            >
              Ready to maximize your
            </span>
            <div
              className="
                pt-5 
                bg-gradient-to-r 
                bg-clip-text 
                text-transparent 
                from-blue-500 
                to-green-400
                "
            >
              Carbon Yields?
            </div>
          </div>
        </div>
        <div
          className="
            flex 
            justify-center 
            mt-5
            "
        >
          <button
            type="button"
            className="
                text-white 
                font-semibold 
                text-lg 
                bg-gradient-to-r 
                from-green-400 
                to-blue-500 
                hover:bg-gradient-to-bl
                shadow-lg 
                shadow-green-500/40
                rounded-lg 
                px-8 
                py-5
                text-center 
                mr-2 
                mb-2 
            "
          >
            Express Interest
          </button>
        </div>
      </div>
    </>
  )
}

export default CallToAction
