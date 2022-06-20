import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

const Signup = () => {
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
                      Already have an account?
                    </span>
                    <Link
                      to='/signin'
                      className='text-sm font-normal text-gray-700 hover:text-gray-800'>
                      Sign in
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
              Create your account
            </h2>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div className='grid grid-rows-2 space-y-0 lg:flex lg:space-y-0 lg:space-x-2'>
                <div className='lg:flex-auto'>
                  <Input
                    for='first-name'
                    label='First name'
                    id='first-name'
                    name='first-name'
                    type='text'
                    autoComplete='first-name'
                    placeholder='First name'
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
                    placeholder='Last name'
                  />
                </div>
              </div>
              <Input
                for='username'
                label='Username'
                id='username'
                name='username'
                type='text'
                autocomplete='username'
                placeholder='Username'
              />
              <Input
                for='email-address'
                label='Email address'
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                placeholder='Email address'
              />
              <Input
                for='password'
                label='Password'
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                green
                placeholder='Password'
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center text-sm'>
                <p className='font-medium'>
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the <b>PRIVACY POLICY</b>.
                </p>
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
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
