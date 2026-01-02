import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/components/Navbar"
import Allproducts from "./assets/pages/Allproducts"
import Products from "./assets/pages/Products"

function App() {


  return (

    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>    
        <Route path="/" element={<Allproducts />} />
        <Route path="/products/:category" element={<Allproducts />} />
        <Route path="/product/:slug" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
