import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { products } from '../data';

const Product = (props) => {
  const { cat, filters, sort } = props;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(cat, filter, sort);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://167.172.72.229:3000/api/products?category=${cat}`
            : 'http://167.172.72.229:3000/api/products'
        );
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  console.log(sort);

  return (
    <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {filteredProducts.map((product) => (
        <a key={product.id} href={product.href} className='group'>
          <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className='w-full h-full object-center object-cover group-hover:opacity-75 group-hover:scale-110 transition-all'
            />
          </div>
          <h3 className='mt-4 text-sm text-gray-700'>{product.title}</h3>
          <p className='mt-1 text-lg font-medium text-gray-900'>
            {product.price[0]}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Product;
