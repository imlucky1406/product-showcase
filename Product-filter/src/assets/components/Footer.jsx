import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanityClient'
import { NavLink } from 'react-router-dom'

const Footer = () => {


  const [logo, setLogo] = useState(null)
  
      useEffect(() => {
      const query = `
        *[_type == "theme"][0]{
          "logoUrl": logo.asset->url
        }
      `
  
      sanityClient
        .fetch(query)
        .then(data => setLogo(data?.logoUrl))
        .catch(console.error)
    }, [])


  return (
    <div className='md:mx-10 mx-4 mt-20 mb-5 sm:mx-[10%]'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-40' src={logo} alt="logo" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, quos voluptate. Culpa itaque asperiores minus, harum eligendi nostrum magni placeat, eaque vitae ea vero labore.</p>
        </div>
        {/* ------------------------------------------------ */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <NavLink to='/'> 
                <li>Home</li>
              </NavLink>
                <NavLink to='/about'>
                  <li>About us</li>
                </NavLink>  
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* ------------------------------------------------ */}
        <div>
            <p  className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 XXXXX XXXXX</li>
                <li>meesho@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center hover:bg-blue-100'>Copyright © 2025 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer