import React from 'react'
import Allproducts from './Allproducts'
import CategoryMenu from '../components/CategoryMenu'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Banner />
        <CategoryMenu />
        <Allproducts />
    </div>
  )
}

export default Home