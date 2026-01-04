
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sanityClient } from "../../sanityClient";
// import { products } from "../assets/products";


const Allproducts = () => {

    
  const { category } = useParams();
  const navigate = useNavigate();

  // const [filterProducts, setFilterProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [showFilter, setShowFilter] = useState(false);

  // const applyFilter = () => {
  //   if (category) {
  //     setFilterProducts(
  //       products.filter(item => item.category === category)
  //     );
  //   } else {
  //     setFilterProducts(products);
  //   }
  // };

  // useEffect(() => {
  //   applyFilter();
  // }, [category]);

  useEffect(() => {
  const query = `
    *[_type == "product" ${category ? `&& category == "${category}"` : ""}]{
      _id,
      title,
      category,
      price,
      inStock,
      slug,
      "imageUrls": images[].asset->url
    }
  `;

  sanityClient.fetch(query)
    .then(data => setProducts(data))
    .catch(console.error);
}, [category]);




  return (
    <div className="my-4">
      <p className="text-pink-950 font-semibold">Browse Your Product</p>
      <div className="flex flex-col sm:flex-row gap-5 mt-5">

        {/* Mobile Filter Button */}
        <button onClick={() => setShowFilter(prev => !prev)} className={`py-1 px-3 border border-pink-800 rounded text-sm text-pink-800 font-semibold sm:hidden ${showFilter ? "bg-blue-600 text-white" : ""}`}>Filters</button>

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
            <p key={cat} onClick={() => category === cat ? navigate("/products")  : navigate(`/products/${cat}`)} className={`pl-3 py-1.5 pr-16 border border-black font-serif rounded cursor-pointer transition-all hover:bg-pink-100 ${category === cat ? "bg-pink-950 text-white hover:bg-pink-950" : "text-black"}`}>
              {cat}
            </p>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {products.map(item => (
            <div  onClick={()=>navigate(`/product/${item.slug.current}`)} key={item._id} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gray-200 h-30 flex items-center justify-center">
                <img src={item.imageUrls?.[0]} alt={item.title} className="bg-gray-50 m-2" />
              </div>
              <div className="p-4">
                <div className={`flex items-center gap-2 text-sm ${item.inStock ? "text-green-500" : "text-gray-500"}`}>
                  <span className={`w-2 h-2 rounded-full ${item.inStock ? "bg-green-500" : "bg-gray-500"}`}></span>
                  {item.inStock ? "Available" : "Out of stock"}
                </div>
                <p className="text-gray-900 font-medium">{item.title}</p>
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

