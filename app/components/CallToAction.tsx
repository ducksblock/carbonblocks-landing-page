'use client'

const CallToAction = () => {
  return (
    <>
      <div
        id="contact"
        className="
          bg-black 
          p-20
          "
      >
        <div
          className="
            text-center 
            text-3xl 
            md:text-5xl 
            text-white
          "
        >
          <div>
            <span
              className="
                pt-5
                font-semibold 
                "
            >
              Ready to maximize your
            </span>
            <div
              className="
                pt-2
                font-extrabold
                md:pt-5 
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
          <a
            href="https://forms.gle/6uUDapoEWtMMeatJ8"
            target="https://forms.gle/6uUDapoEWtMMeatJ8"
          >
            <button
              type="button"
              className="
                  text-white 
                  font-semibold 
                  text-lg 
                  md:text-xl
                  bg-gradient-to-r 
                  from-green-400 
                  to-blue-500 
                  hover:bg-gradient-to-bl
                  shadow-lg 
                  shadow-green-500/40
                  rounded-lg 
                  p-4
                  md:p-5
                  text-center 
                  mr-2 
                  mb-2 
              "
            >
              Express Interest
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default CallToAction
