import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
// import { products } from '../data';

const Product = (props) => {
  const { cat, filters, sort } = props;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // console.log(cat, filter, sort);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          cat
            ? `https://bamboocraftina.online/api/products?category=${cat}`
            : 'https://bamboocraftina.online/api/products/'
        );
        setProducts(res.data.data);
        setMessage(res.data.message);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setMessage();
        setIsLoading(false);
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
  // console.log(products);

  const currency = (total) => {
    const curr = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(total);
    return curr;
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {cat
        ? filteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className='group'
            >
              <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                <img
                  src={product.img}
                  alt={product.imageAlt}
                  className='w-full h-full object-center object-cover group-hover:opacity-75 group-hover:scale-110 transition-all'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{product.title}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {currency(product.price[0])}
              </p>
            </Link>
          ))
        : products.slice(props.start, props.end).map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className='group'
            >
              <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                <img
                  src={product.img}
                  alt={product.img}
                  className='w-full h-full object-center object-cover group-hover:opacity-75 group-hover:scale-110 transition-all'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{product.title}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {currency(product.price[0])}
              </p>
            </Link>
          ))}
    </div>
  );
};

export default Product;
