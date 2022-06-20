import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className='sticky top-0 z-50 bg-white'>
        <header className='z-40 bg-white'>
          <nav aria-label='Top' className='max-w-full mx-auto '>
            <div className='border-b border-gray-200'>
              <div className='h-16 flex items-center mx-4 sm:mx-6 lg:mx-8 drop-shadow-xl'>
                <div className='flex lg:ml-0'>
                  <Link to='/'>
                    <span className='sr-only'>Workflow</span>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=600'
                      alt=''
                    />
                  </Link>
                </div>
                <div className='ml-auto flex items-center'>
                  <div className='lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                    <span className='hidden lg:flex lg:font-normal lg:text-gray-700 lg:text-sm'>
                      Don't have an account?
                    </span>
                    <Link
                      to='/signup'
                      className='text-sm font-normal text-gray-700 hover:text-gray-800'>
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=600'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label
                  htmlFor='email-address'
                  className='block text-sm font-medium text-black'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='mt-2 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-black mt-4'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  green
                  required
                  className='mt-2 green-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-green-600 hover:text-green-500'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-green-500 group-hover:text-green-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
