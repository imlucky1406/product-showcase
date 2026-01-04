import React from 'react'
import { assets } from '../assets/products'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-pink-900 rounded-lg px-6 md:px-10 lg:px-20'>
        <img src={assets.banner} alt="" />
    </div>
  )
}

export default Banner