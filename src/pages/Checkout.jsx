import {
  LockClosedIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import { publicRequest } from '../requestMethods';

const Checkout = () => {
  const [inputs, setInputs] = useState({});
  const [province, setProvince] = useState([]);
  const [midtransToken, setMidtransToken] = useState(null);
  useState;
  const history = useHistory();
  const cart = useSelector((state) => state.cart);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(inputs);
  };

  const currency = (total) => {
    const curr = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(total);
    return curr;
  };

  const payHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post('/payment/', {});
      !midtransToken && setMidtransToken(res.data.token);
      // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
      window.snap.pay(midtransToken ? midtransToken : res.data.token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert('payment success!');
          setMidtransToken(null);
          history.push('/success', {
            midtransData: result,
            products: cart,
            input: inputs,
          });
          console.log(result, cart);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert('wating your payment!');
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert('payment failed!');
          setMidtransToken(null);
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert('you closed the popup without finishing the payment');
          setMidtransToken(null);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='bg-white'>
        <main className='max-2-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6'>
          <div className='relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
              Checkout
            </h1>
          </div>
          <section aria-labelledby='carts'>
            <div className='grid grid-cols-1 md:grid-cols-2 auto-cols-max gap-y-6 gap-x-12 mb-24'>
              <form className=' space-y-10' action='#' method='POST'>
                <input type='hidden' name='remember' defaultValue='true' />
                <div className='rounded-md shadow-sm -space-y-px'>
                  <div className='py-2'>
                    <p className='font-semibold text-lg'>Contact information</p>
                    <Input
                      htmlFor='email'
                      label='Email'
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                    />
                    <div className='w-full border-b-[1px] my-10 border-b-gray-200'></div>
                  </div>
                  <p className='font-semibold text-lg'>Shipping information</p>
                  <div className='grid grid-rows-2 space-y-0 space-x-0 lg:flex lg:space-y-0 lg:space-x-6'>
                    <div className='lg:flex-auto'>
                      <Input
                        htmlFor='first-name'
                        label='First name'
                        id='first-name'
                        name='first-name'
                        type='text'
                        autoComplete='first-name'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='lg:flex-auto'>
                      <Input
                        htmlFor='last-name'
                        label='Last name'
                        id='last-name'
                        name='last-name'
                        type='text'
                        autoComplete='last-name'
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Input
                    htmlFor='address'
                    label='Address'
                    id='address'
                    name='address'
                    type='text'
                    autoComplete='address'
                    onChange={handleChange}
                  />
                  <Input
                    htmlFor='province'
                    label='Province'
                    id='province'
                    name='province'
                    type='text'
                    autoComplete='province'
                    onChange={handleChange}
                  />
                  <div className='grid grid-rows-2 space-y-0 space-x-0 lg:flex lg:space-y-0 lg:space-x-6'>
                    <div className='lg:flex-auto'>
                      <Input
                        htmlFor='city'
                        label='City'
                        id='city'
                        name='city'
                        type='text'
                        autoComplete='city'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='lg:flex-auto'>
                      <Input
                        htmlFor='postal-code'
                        label='Postal code'
                        id='postal-code'
                        name='postal-code'
                        type='text'
                        autoComplete='postal-code'
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Input
                    htmlFor='phone'
                    label='Phone'
                    id='phone'
                    name='phone'
                    type='tel'
                    autoComplete='phone'
                    onChange={handleChange}
                  />
                </div>
                <button
                  type='submit'
                  onClick={payHandler}
                  className='group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:hidden'>
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <ShoppingBagIcon
                      className='h-5 w-5 text-green-500 group-hover:text-green-400'
                      aria-hidden='true'
                    />
                  </span>
                  Confirm order
                </button>
              </form>
              <div className='mt-10 mb-6 order-first md:order-last'>
                <p className='font-semibold text-lg'>Order summary</p>
                <div className='flex max-w-full h-fit max-h-fit space-y-4 px-6 mt-4 pb-6 bg-white border-gray-200 border-[1px] rounded-md'>
                  <div className='flex basis-full flex-col divide-y-[1px] '>
                    {cart.products.map((product) => (
                      <li
                        key={`${product._id}/${product.dimension}`}
                        className='flex py-6'>
                        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md '>
                          <img
                            src={product.img}
                            alt={product.img}
                            className='h-full w-full object-cover object-center'
                          />
                        </div>

                        <div className='ml-4 flex flex-1 flex-col'>
                          <div>
                            <div className='flex justify-between text-base font-medium text-gray-900'>
                              <h3>
                                <Link to={`/product/${product._id}`}>
                                  {' '}
                                  {product.title}{' '}
                                </Link>
                              </h3>
                              <div className='flex text-sm'>
                                <button
                                  type='button'
                                  className='font-medium text-green-600 hover:text-green-500'>
                                  Remove
                                </button>
                              </div>
                            </div>
                            <p className='mt-1 text-sm text-gray-500'>
                              {product.color}
                            </p>
                          </div>
                          <div className='flex flex-1 items-end justify-between text-sm'>
                            <p>{currency(product.price)}</p>

                            <div className='flex'>
                              <p className='text-gray-500'>
                                Qty {product.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                    <div className='flex flex-1 flex-col justify-between pt-5'>
                      <div className='space-y-5'>
                        <div className='flex justify-between text-base font-medium text-gray-900 py-5 '>
                          <h3>Total</h3>
                          <div className='flex text-sm font-bold'>
                            <p>{currency(cart.total)}</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={payHandler}
                        className='group relative w-full md:flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hidden'>
                        <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                          <ShoppingCartIcon
                            className='h-5 w-5 text-green-500 group-hover:text-green-400'
                            aria-hidden='true'
                          />
                        </span>
                        Confirm order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
