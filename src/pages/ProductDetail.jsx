import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Input from '../components/Input';
import { Link, useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState([]);
  const [shipping, setShipping] = useState('');
  const [shippingPrice, setshippingPrice] = useState('');
  const [dimension, setDimension] = useState([]);
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data.data);
        setShipping('Shipping');
        setshippingPrice(100000);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const priceChange = (price1, price2, price3, price4) => {
    if (dimension === product.dimension[0]) {
      return new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(price1);
    } else if (dimension === product.dimension[1]) {
      return new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(price2);
    } else if (dimension === product.dimension[2]) {
      return new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(price3);
    } else if (dimension === product.dimension[3]) {
      return new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(price4);
    } else {
      return `${new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(price1)} ~ ${new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(price4 || price3 || price2)}`;
    }
  };

  const handleChangeQty = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setQuantity(value);
  };

  const handleChangeDimension = (e) => {
    let value = e;
    if (value === product.dimension[0]) {
      setPrice(product.price[0]);
    } else if (value === product.dimension[1]) {
      setPrice(product.price[1]);
    } else if (value === product.dimension[2]) {
      setPrice(product.price[2]);
    } else {
      setPrice(product.price[3]);
    }

    setDimension(value);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity, dimension }));
  };

  if (isLoading) {
    return (
      <div className='bg-white w-[100vh] h-[100vh]'>
        <svg
          className='animate-spin h-5 w-5 mr-3 ...'
          viewBox='0 0 24 24'
        ></svg>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className='bg-white'>
        <div className='pt-6'>
          <nav aria-label='Breadcrumb' className='py-6 lg:py-0'>
            <ol
              role='list'
              className='max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8'
            >
              {product.categories.map((category) => (
                <li key={category}>
                  <div className='flex items-center'>
                    <Link
                      to={`/products/${category}`}
                      className='mr-2 text-sm font-medium text-gray-900'
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                    <svg
                      width={16}
                      height={20}
                      viewBox='0 0 16 20'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      className='w-4 h-5 text-gray-300'
                    >
                      <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                    </svg>
                  </div>
                </li>
              ))}
              <li className='text-sm'>
                <Link
                  to={`/product/${product._id}`}
                  aria-current='page'
                  className='font-medium text-gray-500 hover:text-gray-600'
                >
                  {product.title.charAt(0).toUpperCase() +
                    product.title.slice(1)}
                </Link>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className=' max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
            <div className=' aspect-w-3 aspect-h-4 rounded-lg overflow-hidden block lg:hidden'>
              <img
                src={product.img}
                alt={product.img}
                className='w-full h-full object-center object-cover'
              />
            </div>
          </div>

          {/* Product info */}
          <div className='max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8'>
            <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
              <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:hidden'>
                {product.title}
              </h1>
            </div>

            {/* Options */}
            <div className='mt-4 lg:mt-0 lg:row-span-3'>
              <h2 className='sr-only'>Product information</h2>
              <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 hidden lg:block sm:text-3xl'>
                {product.title}
              </h1>
              <p className='text-3xl text-gray-900'>
                {priceChange(
                  product.price[0],
                  product.price[1],
                  product.price[2],
                  product.price[3]
                )}
              </p>

              {/* Reviews */}
              {/* <div className='mt-6'>
                <h3 className='sr-only'>Reviews</h3>
                <div className='flex items-center'>
                  <div className='flex items-center'>
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-gray-900'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                    ))}
                  </div>
                  <p className='sr-only'>{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className='ml-3 text-sm font-medium text-green-600 hover:text-green-500'>
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div> */}

              <div className='mt-10'>
                {/* Sizes */}
                <div className='mt-10'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-sm text-gray-900 font-medium'>Size</h3>
                    {product.inStock ? (
                      ''
                    ) : (
                      <h3 className='text-sm text-red-600 font-medium'>
                        Out of stock
                      </h3>
                    )}
                    {/* <a
                      href='#'
                      className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                      Size guide
                    </a> */}
                  </div>

                  <RadioGroup
                    value={dimension}
                    onChange={handleChangeDimension}
                    className='mt-4'
                  >
                    <RadioGroup.Label className='sr-only'>
                      Choose a size
                    </RadioGroup.Label>
                    <div className='grid grid-cols-1 gap-4'>
                      {product.dimension.map((size) => (
                        <RadioGroup.Option
                          key={size}
                          value={size}
                          disabled={!product.inStock}
                          className={({ active }) =>
                            classNames(
                              product.inStock
                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                              active ? 'ring-2 ring-green-500' : '',
                              'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as='span'>
                                {size}
                              </RadioGroup.Label>
                              {product.inStock ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked
                                      ? 'border-green-500'
                                      : 'border-transparent',
                                    'absolute -inset-px rounded-md pointer-events-none'
                                  )}
                                  aria-hidden='true'
                                />
                              ) : (
                                <span
                                  aria-hidden='true'
                                  className='absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none'
                                >
                                  <svg
                                    className='absolute inset-0 w-full h-full text-gray-200 stroke-2'
                                    viewBox='0 0 100 100'
                                    preserveAspectRatio='none'
                                    stroke='currentColor'
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect='non-scaling-stroke'
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                  <div className='items-center justify-between mt-10'>
                    <h3 className='text-sm text-gray-900 font-medium'>
                      Quantity
                    </h3>
                    <div className='w-20 mt-4'>
                      <Input
                        type='number'
                        value={quantity}
                        min='1'
                        max='10'
                        onChange={handleChangeQty}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  disabled={!product.inStock}
                  className='mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed'
                >
                  Add to bag
                </button>
              </div>
            </div>

            <div className='py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
              {/* Description and details */}
              <div className='mt-6 max-w-xl mx-auto sm:px-6 lg:px-8'>
                <div className=' aspect-w-6 aspect-h-8 rounded-lg overflow-hidden hidden lg:block '>
                  <img
                    src={product.img}
                    alt={product.img}
                    className='w-full h-full object-center object-cover'
                  />
                </div>
              </div>
              <div>
                <h3 className='sr-only'>Description</h3>

                <div className='space-y-6'>
                  <p className='text-base text-gray-900 font-bold mt-8'>
                    Description<br></br>
                    <span className='font-normal'>{product.desc}</span>
                  </p>
                </div>
              </div>

              {/* <div className='mt-10'>
                <h3 className='text-sm font-medium text-gray-900'>
                  Highlights
                </h3>

                <div className='mt-4'>
                  <ul role='list' className='pl-4 list-disc text-sm space-y-2'>
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className='text-gray-400'>
                        <span className='text-gray-600'>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              {/* <div className='mt-10'>
                <h2 className='text-sm font-medium text-gray-900'>Details</h2>

                <div className='mt-4 space-y-6'>
                  <p className='text-sm text-gray-600'>{product.details}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
