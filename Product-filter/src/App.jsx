import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/Navbar"
import Allproducts from "./assets/pages/Allproducts"
import Products from "./assets/pages/Products"
import Home from "./assets/pages/Home"
import Footer from "./assets/components/Footer"

function App() {


  return (

    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Allproducts />} />
        <Route path="/products/:category" element={<Allproducts />} />
        <Route path="/product/:slug" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
