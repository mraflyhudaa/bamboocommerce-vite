import { LockClosedIcon } from '@heroicons/react/solid';
import React from 'react';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Navbar from '../components/Navbar';

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className='bg-white'>
        <main className='max-2-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6'>
          <div className='relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
              Your Cart
            </h1>
          </div>
          <section aria-labelledby='carts'>
            <div className='grid grid-cols-1 md:grid-cols-2 auto-cols-max gap-y-6 gap-x-12 mb-24'>
              <form className=' space-y-10' action='#' method='POST'>
                <input type='hidden' name='remember' defaultValue='true' />
                <div className='rounded-md shadow-sm -space-y-px'>
                  <p className='font-semibold text-lg'>Shipping information</p>
                  <div className='grid grid-rows-2 space-y-0 space-x-0 lg:flex lg:space-y-0 lg:space-x-6'>
                    <div className='lg:flex-auto'>
                      <Input
                        for='first-name'
                        label='First name'
                        id='first-name'
                        name='first-name'
                        type='text'
                        autoComplete='first-name'
                      />
                    </div>
                    <div className='lg:flex-auto'>
                      <Input
                        for='last-name'
                        label='Last name'
                        id='last-name'
                        name='last-name'
                        type='text'
                        autoComplete='last-name'
                      />
                    </div>
                  </div>
                  <Input
                    for='address'
                    label='Address'
                    id='address'
                    name='address'
                    type='text'
                    autocomplete='address'
                  />
                  <Input
                    for='province'
                    label='Province'
                    id='province'
                    name='province'
                    type='text'
                    autoComplete='province'
                  />
                  <div className='grid grid-rows-2 space-y-0 space-x-0 lg:flex lg:space-y-0 lg:space-x-6'>
                    <div className='lg:flex-auto'>
                      <Input
                        for='city'
                        label='City'
                        id='city'
                        name='city'
                        type='text'
                        autoComplete='city'
                      />
                    </div>
                    <div className='lg:flex-auto'>
                      <Input
                        for='postal-code'
                        label='Postal code'
                        id='postal-code'
                        name='postal-code'
                        type='text'
                        autoComplete='postal-code'
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className='mt-6 mb-6 order-first md:order-last'>
                <p className='font-semibold text-lg'>Order summary</p>
                <div className='flex max-w-full h-full max-h-fit space-y-4 px-6 mt-4 pb-6 bg-white border-gray-200 border-2 rounded-md'>
                  <div className='flex basis-full flex-col divide-y-[1px] '>
                    {[1, 2, 3].map(() => (
                      <li className='flex py-6'>
                        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md '>
                          <img
                            src={''}
                            alt={''}
                            className='h-full w-full object-cover object-center'
                          />
                        </div>

                        <div className='ml-4 flex flex-1 flex-col'>
                          <div>
                            <div className='flex justify-between text-base font-medium text-gray-900'>
                              <h3>
                                <a href={'test'}> {'test'} </a>
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
                              {'red'}
                            </p>
                          </div>
                          <div className='flex flex-1 items-end justify-between text-sm'>
                            <p>{'100000'}</p>

                            <div className='flex'>
                              <p className='text-gray-500'>Qty {1}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                    <div className='flex flex-1 flex-col justify-between pt-5'>
                      <div className='space-y-5'>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <h3>Subtotal</h3>
                          <div className='flex text-sm font-bold'>
                            <p>$122.33</p>
                          </div>
                        </div>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <h3>Shipping</h3>
                          <div className='flex text-sm font-bold'>
                            <p>$5.33</p>
                          </div>
                        </div>
                        <div className='flex justify-between text-base font-medium text-gray-900 pt-5 border-t-[1px]'>
                          <h3>Total</h3>
                          <div className='flex text-sm font-bold'>
                            <p>$5.33</p>
                          </div>
                        </div>
                      </div>

                      <button
                        type='submit'
                        className='group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 '>
                        <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                          <LockClosedIcon
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
