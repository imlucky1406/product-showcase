import React from 'react'
import { Link } from 'react-router-dom'
import glasses from '../assets/category_glasses.png'
import clothes from '../assets/category_clothes.png'
import bags from '../assets/category_bags.png'
import watches from '../assets/category_watches.png'
import perfumes from '../assets/category_perfumes.png'
import footwear from '../assets/category_footwear.png'



const CategoryMenu = () => {

    const categoryData=[
        {
            category:"Footwear",
            image: footwear,
        },
        {
            category:"Clothes",
            image: clothes,
        },
        {
            category:"Bags",
            image: bags,
        },
        {
            category:"Watches",
            image: watches,
        },
        {
            category:"Glasses",
            image: glasses,
        },
        {
            category:"Perfumes",
            image: perfumes,
        },
    ]

  return (
    <div className='mx-4 sm:mx-[10%] flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Popular category</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our wide range of quality products, organized by category, and shop with ease.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto'>
        {categoryData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-lg font-serif cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/products/${item.category}`}>
                
                    <div className='bg-primary w-32 h-32 rounded-full flex items-center justify-center mb-2'>
                        <img className='sm:w-24 p-4 filter brightness-0 invert' src={item.image} alt="" />
                    </div>
                    <p>{item.category}</p>
                
            </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu