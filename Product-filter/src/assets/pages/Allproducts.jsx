
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { sanityClient } from "../../sanityClient";
// import { products } from "../assets/products";


const Allproducts = () => {

    
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]); //new

  const [showFilter, setShowFilter] = useState(false);

// }, [category]);

  useEffect(() => {
    const query = `
      *[_type == "product" ${category ? `&& category->title == "${category}"` : ""}]{
        _id,
        title,
        price,
        inStock,
        slug,
        "categoryTitle": category->title,
        "imageUrls": images[].asset->url
      }
    `;

    sanityClient
      .fetch(query)
      .then(data => setProducts(data))
      .catch(console.error);
  }, [category]);

  useEffect(() => {
    const categoryQuery = `*[_type=="category"]{ _id, title }`;
    sanityClient
      .fetch(categoryQuery)
      .then(data => setCategories(data))
      .catch(console.error);
  }, []);


  return (
    <div className="mx-4 sm:mx-[10%] my-4">
      <p className="text-primary font-semibold">Browse Your Product</p>
      <div className="flex flex-col sm:flex-row gap-5 mt-5">

        {/* Mobile Filter Button */}
        <button onClick={() => setShowFilter(prev => !prev)} className={`py-1 px-3 border border-primary rounded text-sm text-primary font-semibold sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}>Filters</button>
        {/* Filters */}
        <div className={`flex flex-col gap-4 text-sm ${showFilter ? "flex" : "hidden"} sm:flex`}>
          {categories.map(cat => (
            <p key={cat._id} onClick={() => category === cat.title ? navigate("/products")  : navigate(`/products/${cat.title}`)} className={`pl-3 py-1.5 pr-16 border border-black font-serif rounded cursor-pointer transition-all hover:bg-pink-100 ${category === cat.title ? "bg-pink-950 text-white hover:bg-pink-950" : "text-black"}`}>
              {cat.title}
            </p>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
          {products.map(item => (
            <div
              onClick={() => navigate(`/product/${item.slug.current}`)}
              key={item._id}
              className="border ring-1 border-gray-500 rounded-xl overflow-hidden cursor-pointer 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-lg
                        sm:h-[380px] h-auto flex flex-col"
            >
              {/* IMAGE (70%) */}
              <div className="flex-[7] bg-gray-100 flex items-center justify-center">
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={item.imageUrls?.[0]}
                    alt={item.title}
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
              </div>

              {/* DETAILS (30%) */}
              <div className="flex-[3] p-4 flex flex-col justify-between">
                <div>
                  <div
                    className={`flex items-center gap-2 text-xs mb-1 ${
                      item.inStock ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.inStock ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></span>
                    {item.inStock ? "Available" : "Out of stock"}
                  </div>

                  <p className="text-gray-900 font-medium text-sm line-clamp-2">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-600">{item.categoryTitle}</p>
                </div>

                <p className="font-semibold text-sm mt-2">₹{item.price}</p>
              </div>
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}

export default Allproducts

