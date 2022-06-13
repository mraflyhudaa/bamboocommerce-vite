import React from 'react';
import { products } from '../data';

const Product = (props) => {
  return (
    <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {products.slice(props.start, props.end).map((product) => (
        <a key={product.id} href={product.href} className='group'>
          <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className='w-full h-full object-center object-cover group-hover:opacity-75 group-hover:scale-110 transition-all'
            />
          </div>
          <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
          <p className='mt-1 text-lg font-medium text-gray-900'>
            {product.price}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Product;
