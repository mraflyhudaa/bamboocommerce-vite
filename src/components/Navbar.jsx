/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Menu, Popover, Tab, Transition } from '@headlessui/react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Link, useHistory } from 'react-router-dom';
import { navigation } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, calculate, removeProduct } from '../redux/cartRedux';
import MenuDropdown from './Menu';
import { LogoutIcon } from '@heroicons/react/solid';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const cart = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.currentUser);
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.products.length > 0) {
      setIsDisabled(false);
      console.log(cart);
    } else {
      setIsDisabled(true);
    }
  }, [cart]);

  const handleClick = (e) => {
    e.preventDefault();
    if (user) {
      history.push('/checkout');
    } else {
      alert('You need to login first before checkout!');
      history.push('/signin');
    }
  };

  const onDelete = (id, price, quantity) => {
    const confirmBox = window.confirm(
      'Do you really want to remove this product?'
    );
    if (confirmBox == true) {
      dispatch(removeProduct(id, price, quantity));

      if (isSuccess) {
        toast.success(message);
      }
    }
  };

  const deleteItem = (id, price, quantity) => {
    const filter = items.filter((item) => item._id !== id);
    dispatch(removeProduct({ _id: filter, price, quantity }));
  };

  const currency = (total) => {
    const curr = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(total);
    return curr;
  };

  return (
    <div className='sticky top-0 z-50 bg-white'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl'>
                <div className='flex px-4 pt-5 pb-2'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='w-6 h-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as='div' className='mt-2'>
                  <div className='border-b border-gray-200'>
                    <Tab.List className='flex px-4 -mb-px space-x-8'>
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'text-green-600 border-green-600'
                                : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-normal'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className='px-4 pt-10 pb-8 space-y-10'
                      >
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className='font-normal text-green-500'
                            >
                              {section.name}
                            </p>
                            <ul
                              role='list'
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className='flex flex-col mt-6 space-y-6'
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className='flow-root'>
                                  <a
                                    href={item.href}
                                    className='block p-2 -m-2 text-gray-500'
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <Link
                        to={page.href}
                        className='block p-2 -m-2 font-normal text-gray-900'
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div> */}

                <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                  {user ? (
                    <>
                      <div className='flow-root '>
                        <span className='block p-2 -m-2 font-normal text-gray-900'>
                          as {user?.email}
                        </span>
                      </div>
                      <div className='flow-root'>
                        <button
                          // onClick={handleClick}
                          className={
                            'text-gray-900 group flex w-full items-center rounded-md py-2 '
                          }
                        >
                          <LogoutIcon
                            className='w-5 h-5 mr-2'
                            aria-hidden='true'
                          />
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='flow-root'>
                        <Link
                          to='signin'
                          className='block p-2 -m-2 font-normal text-gray-900'
                        >
                          Sign in
                        </Link>
                      </div>
                      <div className='flow-root'>
                        <Link
                          to='signup'
                          className='block p-2 -m-2 font-normal text-gray-900'
                        >
                          Create account
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Cart Modals */}
      <Transition.Root show={openCart} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setOpenCart}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='w-screen max-w-md pointer-events-auto'>
                    <div className='flex flex-col h-full overflow-y-scroll bg-white shadow-xl'>
                      <div className='flex-1 px-4 py-6 overflow-y-auto sm:px-6'>
                        <div className='flex items-start justify-between'>
                          <Dialog.Title className='text-lg font-medium text-gray-900'>
                            {' '}
                            Shopping cart{' '}
                          </Dialog.Title>
                          <div className='flex items-center ml-3 h-7'>
                            <button
                              type='button'
                              className='p-2 -m-2 text-gray-400 hover:text-gray-500'
                              onClick={() => setOpenCart(false)}
                            >
                              <span className='sr-only'>Close panel</span>
                              <XIcon className='w-6 h-6' aria-hidden='true' />
                            </button>
                          </div>
                        </div>

                        <div className='mt-8'>
                          <div className='flow-root'>
                            <ul
                              role='list'
                              className='-my-6 divide-y divide-gray-200'
                            >
                              {cart.products.map((product) => (
                                <li
                                  key={`${product._id}/${product.dimension}`}
                                  className='flex py-6'
                                >
                                  <div className='flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md'>
                                    <img
                                      src={product.img}
                                      alt={product.img}
                                      className='object-cover object-center w-full h-full'
                                    />
                                  </div>

                                  <div className='flex flex-col flex-1 ml-4'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium text-gray-900'>
                                        <h3>
                                          <Link to={`/product/${product._id}`}>
                                            {' '}
                                            {product.title}
                                          </Link>
                                        </h3>
                                        <p className='ml-4'>
                                          {currency(
                                            product.price * product.quantity
                                          )}
                                        </p>
                                      </div>
                                      <p className='mt-1 text-sm text-gray-500'>
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className='flex items-end justify-between flex-1 text-sm'>
                                      <p className='text-gray-500'>
                                        Qty {product.quantity}
                                      </p>

                                      <div className='flex'>
                                        <button
                                          type='button'
                                          onClick={() =>
                                            onDelete(
                                              product._id,
                                              product.price,
                                              product.quantity
                                            )
                                          }
                                          className='font-medium text-green-600 hover:text-green-500'
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className='px-4 py-6 border-t border-gray-200 sm:px-6'>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <p>Subtotal</p>
                          <p>{currency(cart.total)}</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-500'>
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className='mt-6'>
                          <button
                            onClick={handleClick}
                            disabled={isDisabled}
                            className='items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed'
                          >
                            {/* <Link to={'/checkout'}>Checkout</Link> */}
                            Checkout
                          </button>
                        </div>
                        <div className='flex justify-center mt-6 text-sm text-center text-gray-500'>
                          <p>
                            or{' '}
                            <button
                              type='button'
                              className='font-medium text-green-600 hover:text-green-500'
                              onClick={() => setOpenCart(false)}
                            >
                              Continue Shopping
                              <span aria-hidden='true'> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <header className='z-40 bg-white'>
        <nav aria-label='Top' className='max-w-full mx-auto '>
          <div className='border-b border-gray-200 '>
            <div className='flex items-center h-16 mx-4 sm:mx-6 lg:mx-8'>
              <button
                type='button'
                className='p-2 text-gray-400 bg-white rounded-md lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='w-6 h-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='flex ml-4 lg:ml-0'>
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

              {/* Flyout menus */}
              <Popover.Group className='z-20 hidden lg:ml-8 lg:block lg:self-stretch'>
                <div className='flex h-full space-x-8'>
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className='flex'>
                      {({ open }) => (
                        <>
                          <div className='relative flex'>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-green-600 text-green-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-normal border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Popover.Panel className='absolute inset-x-0 text-sm text-gray-500 top-full'>
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className='absolute inset-0 bg-white shadow top-1/2'
                                aria-hidden='true'
                              />

                              <div className='relative bg-white'>
                                <div className='px-8 mx-auto max-w-7xl'>
                                  <div className='grid grid-cols-2 py-16 gap-y-10 gap-x-8'>
                                    <div className='grid grid-cols-3 row-start-1 text-sm gap-y-10 gap-x-8'>
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className='font-normal text-gray-900'
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role='list'
                                            aria-labelledby={`${section.name}-heading`}
                                            className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className='flex'
                                              >
                                                <a
                                                  href={item.href}
                                                  className='hover:text-gray-800'
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className='flex items-center text-sm font-normal text-gray-700 hover:text-gray-800'
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </Popover.Group>

              <div className='flex items-center ml-auto'>
                {user ? (
                  <div className='order-last hidden lg:flex lg:ml-6 '>
                    <a
                      href='#'
                      className='p-2 text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>Search</span>
                      <MenuDropdown aria-hidden='true' />
                    </a>
                  </div>
                ) : (
                  <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                    <>
                      <Link
                        to='/signin'
                        className='text-sm font-normal text-gray-700 hover:text-gray-800'
                      >
                        Sign in
                      </Link>
                      <span
                        className='w-px h-6 bg-gray-200'
                        aria-hidden='true'
                      />
                      <Link
                        to='/signup'
                        className='text-sm font-normal text-gray-700 hover:text-gray-800'
                      >
                        Create account
                      </Link>
                    </>
                  </div>
                )}

                {/* Cart */}
                <div className='flow-root ml-4 lg:ml-6'>
                  <a
                    onClick={() => setOpenCart(true)}
                    className='flex items-center p-2 -m-2 group'
                  >
                    <ShoppingBagIcon
                      className='flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                    <span className='ml-2 text-sm font-normal text-gray-700 group-hover:text-gray-800'>
                      {cart.quantity}
                    </span>
                    <span className='sr-only'>items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
