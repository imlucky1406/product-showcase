// import React, { useEffect, useState } from 'react'
// import { assets } from '../assets/products'
// import { sanityClient } from '../../sanityClient'

// const Banner = () => {

//   const [banner, setBanner] = useState(null)

//   useEffect(() => {
//     const query = `
//       *[_type == "theme"][0]{
//         "bannerUrl": banner.asset->url
//       }
//     `

//     sanityClient
//       .fetch(query)
//       .then(data => setBanner(data?.bannerUrl))
//       .catch(console.error)
//   }, [])

//   return (
//     <div className='flex flex-col rounded-lg'>
//         <img src={banner} alt="" />
//     </div>
//   )
// }

// export default Banner


import React from "react";
import shoe from "../assets/banner_shoe.png";
import jacket from "../assets/banner_jacket.png";
import jacket1 from "../assets/banner_jacket2.png";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">

        {/* LEFT MAIN BANNER */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden 
          bg-gradient-to-br from-black via-[#2b1b14] to-[#6b3f2b] 
          text-white p-5 sm:p-8 flex items-center min-h-[320px] sm:min-h-[420px]"
        >
          <div className="max-w-md z-10">
            <span className="uppercase text-xs sm:text-sm tracking-widest text-gray-300">
              Limited Edition
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3">
              SNEAKERS 
            </h1>

            <p className="text-gray-300 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
              Discover the latest trends in sneakers with our exclusive limited edition collection. Combining style, comfort, and performance for every step you take.
            </p>

            <button className="mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 transition 
              px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium"
            >
              Shop Now
            </button>
          </div>

          {/* Product Image */}
          <img
            src={shoe}
            alt="Shoe"
            className="absolute right-2 sm:right-6 bottom-0 
              w-40 sm:w-56 lg:w-80 object-contain"
          />
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {/* CARD 1 */}
          <div className="flex items-center justify-between 
            bg-[#c3edf9] rounded-2xl p-4 sm:p-6"
          >
            <div className="pr-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                <span className="text-gray-600">KELONBRO </span> <br />
                Men Applique Casual Jacket
              </h3>
              <p className="text-blue-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Save up to $450
              </p>
            </div>

            <img
              src={jacket1}
              alt="jacket"
              className="w-16 sm:w-24 object-contain"
            />
          </div>

          {/* CARD 2 */}
          <div className="flex items-center justify-between 
            bg-[#F4EFE6] rounded-2xl p-4 sm:p-6"
          >
            <div className="pr-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                <span className="text-gray-600">WOODLAND</span> <br />
                Sneakers For Men
              </h3>
              <p className="text-blue-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Save up to $600
              </p>
            </div>

            <img
              src={shoe}
              alt="shoe"
              className="w-16 sm:w-24 object-contain"
            />
          </div>

          {/* CARD 3 */}
          <div className="flex items-center justify-between 
            bg-[#d3f8ec] rounded-2xl p-4 sm:p-6"
          >
            <div className="pr-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                <span className="text-gray-600">TrendsTalk </span> <br />
                Men Solid Bomber Jacket
              </h3>
              <p className="text-blue-600 text-xs sm:text-sm mt-1 sm:mt-2">
                Save up to $450
              </p>
            </div>

            <img
              src={jacket}
              alt="jacket"
              className="w-16 sm:w-24 object-contain"
            />
          </div>  

        </div>
      </div>
    </section>
  );
};

export default Banner;
