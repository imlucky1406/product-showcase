import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/products';
import { sanityClient } from '../../sanityClient';

const Navbar = () => {

    const navigate =useNavigate();

    const [showMenu, setshowMenu] = useState('')

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
    <div className='mx-4 sm:mx-[10%] flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=> navigate('/')} className='w-44 cursor-pointer hover:scale-105 duration-500' src={logo || assets.logo} alt="logo" />
        {/* <img src={logo} alt="" /> */}
        <ul className='hidden md:flex text-primary item-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/products'>
                <li className='py-1'>ALL PRODUCT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            <img onClick={()=>setshowMenu(true)} className='w-6 md:hidden ' src={assets.menu_icon} alt="" />
            <div className={`${showMenu?'fixed w-full ':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
              <div className='flex items-center justify-between px-5 py-6 border-b border-b-gray-400'>
                <img className='w-36 ' src={assets.logo} alt="" />
                <img className='w-7' onClick={()=>setshowMenu(false)} src={assets.cross} alt="" />
              </div>
              <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg text-pink-950 font-medium'>
                <NavLink  onClick={()=> setshowMenu(false)} to='/'><p className='px-4 py-2 inline-block rounded '>HOME</p></NavLink>
                <NavLink  onClick={()=> setshowMenu(false)} to='/products'><p className='px-4 py-2 inline-block rounded '>ALL PRODUCTS</p></NavLink>
                <NavLink  onClick={()=> setshowMenu(false)} to='/about'><p className='px-4 py-2 inline-block rounded '>ABOUT</p></NavLink>
                <NavLink  onClick={()=> setshowMenu(false)} to='/contact'><p className='px-4 py-2 inline-block rounded '>CONTACT</p></NavLink>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar