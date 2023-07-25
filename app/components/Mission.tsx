'use client'

const Mission = () => {
  return (
    <div
      className="
        block
        scroll-smooth
      "
    >
      <div
        id="mission"
        className="
          grid 
          grid-cols-2 
          gap-2 md:gap-3 
          bg-white 
          py-5 
          md:py-10 
          border-b-[2px] 
          border-neutral-500
        "
      >
        <div
          className="
            md:pl-20 
            m-10 
            text-black 
            text-3xl 
            font-semibold
          "
        >
          The Problem
        </div>
        <div
          className="
            pr-8 
            md:pr-20 
            my-10 
            md:m-10 
            text-black 
            text-lg 
            md:text-2xl
          "
        >
          Nature-based carbon offset projects face trust & traceability issues. Current processes (reforestation, afforestation, carbon sequestration, etc.) lack transparency, creating doubts about effectiveness & long-term sustainability.
        </div>
        <div
          className="
            md:pl-20 
            m-10 
            text-black 
            text-3xl 
            font-semibold
          "
        >
          Our Mission
        </div>
        <div
          className="
            pr-8 
            md:pr-20 
            my-10 
            md:m-10 
            text-black 
            text-lg 
            md:text-2xl
          "
        >
          Carbonblocks is building a democratized carbon credit market using blockchain and IoT technology to overcome existing challenges. The platform tracks real-time data from renewable energy, energy efficiency, agriculture, and industrial projects, providing a data-driven, real-time impact measurement.
        </div>
        <div
          className="
            md:pl-20 
            m-10 
            text-black 
            text-3xl 
            font-semibold
          "
        >
          The Impact
        </div>
        <div
          className="
            pr-8 
            md:pr-20 
            my-10 
            md:m-10 
            text-black 
            text-lg 
            md:text-2xl
          "
        >
          We provide organizations with comprehensive carbon management tools to analyze, reduce, and offset their emissions. By connecting environmentally conscious consumers with impactful initiatives, we strive to transform capitalism into a force for good and create a thriving low-carbon future.
        </div>
      </div>
    </div>
  )
}

export default Mission
