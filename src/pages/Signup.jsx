import React, { useEffect, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Input from '../components/Input';
import { reset } from '../redux/userRedux';
import { register } from '../redux/apiCalls';
import Spinner from '../components/Spinner';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData;

  const history = useHistory();
  const dispatch = useDispatch();

  const { currentUser, isSuccess, isFetching, error, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      toast.error(message);
    }

    if (isSuccess || currentUser) {
      history.push('/signin');
      toast.success(message);
    }

    dispatch(reset());
  }, [currentUser, isSuccess, error, message, history, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        username,
        email,
        password,
      };

      register(dispatch, userData);
    }
  };

  if (isFetching) {
    return <Spinner />;
  }

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
                    <span className='sr-only'>Bamboo</span>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='cubes'
                      className='w-auto h-8 text-green-600 '
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z'
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className='ml-auto flex items-center'>
                  <div className='lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                    <span className='hidden lg:flex lg:font-normal lg:text-gray-700 lg:text-sm'>
                      Already have an account?
                    </span>
                    <Link
                      to='/signin'
                      className='text-sm font-normal text-gray-700 hover:text-gray-800'
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* End of Navbar Section */}

      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='cubes'
              className='w-auto h-12 mx-auto text-green-600 '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z'
              ></path>
            </svg>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Create your account
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={onSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />

            <div className='rounded-md shadow-sm -space-y-px'>
              <Input
                htmlFor='username'
                label='Username'
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                placeholder='Username'
                onChange={onChange}
                required
              />
              <Input
                htmlFor='email-address'
                label='Email address'
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                placeholder='Email address'
                onChange={onChange}
                required
              />
              <Input
                htmlFor='password'
                label='Password'
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                placeholder='Password'
                onChange={onChange}
                required
              />
              <Input
                htmlFor='password2'
                label='Confirm Password'
                id='password2'
                name='password2'
                type='password'
                autoComplete='current-password'
                placeholder='Confirm Password'
                onChange={onChange}
                required
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
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              >
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
