// import React from 'react'
// import { Link } from 'react-router-dom'
// import glasses from '../assets/category_glasses.png'
// import clothes from '../assets/category_clothes.png'
// import bags from '../assets/category_bags.png'
// import watches from '../assets/category_watches.png'
// import perfumes from '../assets/category_perfumes.png'
// import footwear from '../assets/category_footwear.png'



// const CategoryMenu = () => {

//     const categoryData=[
//         {
//             category:"Footwear",
//             image: footwear,
//         },
//         {
//             category:"Clothes",
//             image: clothes,
//         },
//         {
//             category:"Bags",
//             image: bags,
//         },
//         {
//             category:"Watches",
//             image: watches,
//         },
//         {
//             category:"Glasses",
//             image: glasses,
//         },
//         {
//             category:"Perfumes",
//             image: perfumes,
//         },
//     ]

//   return (
//     <div className='mx-4 sm:mx-[10%] flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
//       <h1 className='text-3xl font-medium'>Popular category</h1>
//       <p className='sm:w-1/3 text-center text-sm'>Simply browse through our wide range of quality products, organized by category, and shop with ease.</p>
//       <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto'>
//         {categoryData.map((item,index)=>(
//             <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-lg font-serif cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/products/${item.category}`}>
                
//                     <div className='bg-gray-300 w-32 h-32 rounded-full flex items-center justify-center mb-2'>
//                         <img className='sm:w-24 p-4 filter brightness-0 ' src={item.image} alt="" />
//                     </div>
//                     <p>{item.category}</p>
                    
//             </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CategoryMenu


import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import glasses from "../assets/category_glasses.png";
import clothes from "../assets/category_clothes.png";
import bags from "../assets/category_bags.png";
import watches from "../assets/category_watches.png";
import perfumes from "../assets/category_perfumes.png";
import footwear from "../assets/category_footwear.png";

const CategoryMenu = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const categoryData = [
    { category: "Footwear", image: footwear },
    { category: "Clothes", image: clothes },
    { category: "Bags", image: bags },
    { category: "Watches", image: watches },
    { category: "Glasses", image: glasses },
    { category: "Perfumes", image: perfumes },
  ];

  return (
    <section className="mx-4 sm:mx-[10%] py-14">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col items-center ">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Browse by Category
          </h2>
          <p className="text-sm text-gray-500">
            Shop by popular categories
          </p>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <Swiper
        ref={sliderRef}
        spaceBetween={16}
        slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 2, // mobile
          },
          640: {
            slidesPerView: 3, // tablet
          },
          1024: {
            slidesPerView: 6, // desktop
          },
        }}
      >
        {categoryData.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`/products/${item.category}`}
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center py-4 hover:-translate-y-2 transition-transform"
            >
              <div className="bg-gray-100 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mb-3">
                <img
                  src={item.image}
                  alt={item.category}
                  draggable="false"
                  className="w-16 sm:w-20 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base font-medium text-center">
                {item.category}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategoryMenu;
