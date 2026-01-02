import React, { useEffect, useState } from 'react'
// import { products } from "../assets/products";
import { sanityClient } from "../../sanityClient";
import { useParams } from 'react-router-dom';

const Products = () => {

  const { slug } = useParams();
  const [product, setProduct] = useState(null);

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

    sanityClient
      .fetch(query, { slug })
      .then(data => setProduct(data))
      .catch(console.error);
  }, [slug]);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  console.log();


  return (
    <div>
    <div className='flex flex-col sm:flex-row gap-4'>
      <div>
        <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={product.imageUrls?.[0]} alt={product.title} />
      </div>
      <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
          {product.title}
        </p>
        <p className="text-sm text-gray-500 mt-1">
            Category: {product.category}
        </p>
        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
            Product Details 
          </p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{product.description}</p>
        </div>
        <p className='text-gray-500 font-medium mt-4'>
          Price: <span className='text-gray-600'>{product.price}</span>
        </p>
        <p className={`mt-2 ${product.inStock ? "text-green-600" : "text-red-500"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
       
      </div>
    </div>

</div>
  )
}

export default Products