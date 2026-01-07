import React, { useEffect, useState } from 'react'
import { assets } from '../assets/products'
import { sanityClient } from '../../sanityClient'

const Banner = () => {

  const [banner, setBanner] = useState(null)

  useEffect(() => {
    const query = `
      *[_type == "theme"][0]{
        "bannerUrl": banner.asset->url
      }
    `

    sanityClient
      .fetch(query)
      .then(data => setBanner(data?.bannerUrl))
      .catch(console.error)
  }, [])


  return (
    <div className='flex flex-col rounded-lg'>
        <img src={banner} alt="" />
    </div>
  )
}

export default Banner