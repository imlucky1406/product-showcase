
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../assets/products";

const Allproducts = () => {

    
  const { category } = useParams();
  const navigate = useNavigate();

  const [filterProducts, setFilterProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    if (category) {
      setFilterProducts(
        products.filter(item => item.category === category)
      );
    } else {
      setFilterProducts(products);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category]);



  return (
    <div className="my-4">
      <p className="text-gray-600">Browse products by category</p>
      <div className="flex flex-col sm:flex-row gap-5 mt-5">

        {/* Mobile Filter Button */}
        <button onClick={() => setShowFilter(prev => !prev)} className={`py-1 px-3 border rounded text-sm sm:hidden ${showFilter ? "bg-blue-600 text-white" : ""}`}>Filters</button>

        {/* Filters */}
        <div className={`flex flex-col gap-4 text-sm ${showFilter ? "flex" : "hidden"} sm:flex`}>
          {[
            "Footwear",
            "Clothes",
            "Bags",
            "Watches",
            "Glasses",
            "Perfumes"
          ].map(cat => (
            <p key={cat} onClick={() => category === cat ? navigate("/")  : navigate(`/products/${cat}`)} className={`pl-3 py-1.5 pr-16 border border-black rounded cursor-pointer transition-all hover:bg-indigo-100 ${category === cat ? "bg-indigo-200 text-black" : "text-gray-600"}`}>
              {cat}
            </p>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map(item => (
            <div  onClick={()=>navigate(`/product/${item._id}`)} key={item._id} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gray-200 h-30 flex items-center justify-center">
                <img src={item.image} alt="" className="bg-gray-50 m-2" />
              </div>
              <div className="p-4">
                <div className={`flex items-center gap-2 text-sm ${item.available ? "text-green-500" : "text-gray-500"}`}>
                  <span className={`w-2 h-2 rounded-full ${item.available ? "bg-green-500" : "bg-gray-500"}`}></span>
                  {item.available ? "Available" : "Out of stock"}
                </div>
                <p className="text-gray-900 font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="font-semibold mt-1">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Allproducts

