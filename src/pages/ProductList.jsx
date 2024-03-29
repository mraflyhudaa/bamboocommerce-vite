import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
} from '@heroicons/react/solid';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Footer from '../components/Footer';
import { sortOptions, subCategories, filters } from '../data';
import { Link, useLocation, useParams } from 'react-router-dom';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('newest');

  return (
    <>
      <Navbar />
      <div className='bg-white'>
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as='div'
              className='relative z-50 lg:hidden'
              onClose={setMobileFiltersOpen}
            >
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

              <div className='fixed inset-0 flex z-40'>
                <Transition.Child
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto'>
                    <div className='px-4 flex items-center justify-between'>
                      <h2 className='text-lg font-medium text-gray-900'>
                        Filters
                      </h2>
                      <button
                        type='button'
                        className='-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400'
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className='mt-4 border-t border-gray-200'>
                      <h3 className='sr-only'>Categories</h3>

                      {filters.map((section) => (
                        <Disclosure
                          as='div'
                          key={section.id}
                          className='border-t border-gray-200 px-4 py-6'
                        >
                          {({ open }) => (
                            <>
                              <h3 className='-mx-2 -my-3 flow-root'>
                                <Disclosure.Button className='px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500'>
                                  <span className='font-medium text-gray-900'>
                                    {section.name}
                                  </span>
                                  <span className='ml-6 flex items-center'>
                                    {open ? (
                                      <MinusSmIcon
                                        className='h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    ) : (
                                      <PlusSmIcon
                                        className='h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className='pt-6'>
                                <div>
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className='flex items-center'
                                    >
                                      <ul
                                        role='list'
                                        className='font-medium text-gray-900 px-2 py-3'
                                      >
                                        <li
                                          id={`filter-${section.id}-${optionIdx}`}
                                          className='text-sm'
                                        >
                                          <Link
                                            to={`/products/${option.value}`}
                                          >
                                            {option.label}
                                          </Link>
                                        </li>
                                      </ul>
                                      {/* <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type='checkbox'
                                        defaultChecked={option.checked}
                                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className='ml-3 min-w-0 flex-1 text-gray-500'>
                                        {option.label}
                                      </label> */}
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative z-10 flex md:flex-row flex-col mt-2 md:mt-0 items-baseline justify-between pt-24 pb-6 border-b border-gray-200'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                Products
              </h1>

              <div className='flex items-center'>
                <h1 className='text-base font-bold tracking-tight text-gray-900 px-2'>
                  Sort
                </h1>
                <div className='relative inline-block text-left'>
                  <select
                    className='appearance-none rounded-md relative block w-40 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 green:z-10 sm:text-sm'
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value='newest'>Newest</option>
                    <option value='asc'>Price: Low to High</option>
                    <option value='desc'>Price: High to Low</option>
                  </select>
                </div>
                {/* <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                      Sort
                      <ChevronDownIcon
                        className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='py-1'>
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}>
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu> */}

                {/* <button
                  type='button'
                  className='p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>View grid</span>
                  <ViewGridIcon className='w-5 h-5' aria-hidden='true' />
                </button> */}
                <button
                  type='button'
                  className='p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden'
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className='sr-only'>Filters</span>
                  <FilterIcon className='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>

            <section aria-labelledby='products-heading' className='pt-6 pb-24'>
              <h2 id='products-heading' className='sr-only'>
                Products
              </h2>

              <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10'>
                {/* Filters */}
                <form className='hidden lg:block'>
                  <h3 className='sr-only'>Categories</h3>

                  {filters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.id}
                      className='border-b border-gray-200 py-6'
                    >
                      {({ open }) => (
                        <>
                          <h3 className='-my-3 flow-root'>
                            <Disclosure.Button className='py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <MinusSmIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-4'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <ul
                                    role='list'
                                    className='font-normal  text-gray-900 px-2 '
                                  >
                                    <li
                                      id={`filter-${section.id}-${optionIdx}`}
                                      className='text-sm'
                                    >
                                      <Link to={`/products/${option.value}`}>
                                        {option.label}
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className='lg:col-span-3'>
                  {/* Replace with your content */}
                  <Product cat={cat} filters={filter} sort={sort} />
                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
