import React, { useEffect, useState } from "react";
import { sanityClient } from "../../sanityClient";
import { useParams } from "react-router-dom";

const Products = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const query = `
      *[_type == "product" && slug.current == $slug][0]{
        title,
        category,
        price,
        description,
        inStock,
        "imageUrls": images[].asset->url
      }
    `;
    sanityClient.fetch(query, { slug }).then(setProduct);
  }, [slug]);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <section className="mx-4 sm:mx-[10%] my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT IMAGE SECTION */}
        <div>
          <div className="bg-gray-100 rounded-xl flex items-center justify-center h-[420px] mb-4 relative">
            <img
              src={product.imageUrls[currentIdx]}
              alt={product.title}
              className="object-contain h-full"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3">
            {product.imageUrls.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center 
                  ${idx === currentIdx ? "ring-2 ring-blue-600" : ""}`}
              >
                <img src={img} alt="" className="object-contain h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS SECTION */}
        <div className="flex flex-col gap-5">

          {/* TITLE */}
          <div className="flex items-start justify-between">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              {product.title}
            </h1>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              30% OFF
            </span>
          </div>

          {/* RATING & STOCK */}
          <div className="flex items-center gap-3 text-sm">
            ⭐⭐⭐⭐⭐
            {/* <span className="text-gray-500">(0 customer reviews)</span> */}
            <span className="text-green-600 font-medium">
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* PRICE */}
          <p className="text-xl font-semibold">
            Price:
            <span className="line-through text-gray-400 ml-2">$888</span>
            <span className="text-blue-600 ml-2">${product.price}</span>
          </p>

          <hr />

          {/* COLORS
          <div>
            <p className="font-medium mb-2">Color:</p>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-black ring-2 ring-black"></span>
              <span className="w-6 h-6 rounded-full bg-white border"></span>
            </div>
          </div>

          <hr /> */}

          {/* QUANTITY & ACTIONS */}
          <div className="flex flex-wrap gap-4 items-center">

            {/* Quantity */}
            <div className="flex items-center border rounded-full overflow-hidden">
              <button
                className="px-4 py-2"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                −
              </button>
              
              <span className="px-4">{qty}</span>
              <button
                className="px-4 py-2"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>

            {/* BUTTONS */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              Purchase Now
            </button>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full">
              Add to Cart
            </button>

            <button className="w-12 h-12 rounded-full border flex items-center justify-center">
              &#9825;
            </button>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-600 leading-relaxed mt-4">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
