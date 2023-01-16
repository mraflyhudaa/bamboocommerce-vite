import React from 'react';
import {
  AnnotationIcon,
  ArrowsExpandIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { Link } from 'react-router-dom';

const callouts = [
  {
    name: 'Outside',
    description: 'fences, poles and mats, among others',
    imageSrc: '../assets/image/bamboo_outdoor.webp',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
    category: 'outside',
  },
  {
    name: 'Inside',
    description: 'blinds, room dividers and more',
    imageSrc: '../assets/image/bamboo_indoor.webp',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
    category: 'inside',
  },
  {
    name: 'Building Materials',
    description: 'boards, plates and beams',
    imageSrc: '../assets/image/bamboo_material.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    category: 'building',
  },
];

const features = [
  {
    name: 'Strong',
    description:
      'Higher tensile strength than certain steel alloys and higher compressive strength than some concrete mixes.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Versatile',
    description:
      'In addition to being a versatile building material, it is also a basic raw material for the wood, paper, food and textile industries.',
    icon: ArrowsExpandIcon,
  },
  {
    name: 'Fast Growing',
    description:
      'The fastest growing bamboo grows up to 91 cm per day. Giant bamboo grows to a height of 30 m in just 6 months.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Environmentally Friendly',
    description:
      'Bamboo forest converts about 35% more CO2 into oxygen than a hectare of ordinary trees.',
    icon: AnnotationIcon,
  },
];

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl max-h-full  mx-auto'>
          <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <svg
              className='hidden lg:block absolute right-0 inset-y-0 h-[100vh] w-48 text-white transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>
            <main className='pt-10 z-0 overflow-y-auto mx-auto max-w-7xl px-4 sm:pt-8 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>
                    Feel the aesthetic of{' '}
                    <span className='block text-green-600 xl:inline'>
                      bamboo crafts
                    </span>
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0'>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  laboriosam, hic maiores aspernatur fuga sunt magnam. Enim,
                  quae asperiores? Debitis ipsa nemo voluptas error at mollitia
                  pariatur rem iusto! Repudiandae? */}
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <a
                      href='#categories'
                      className='w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-normal rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10'
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='z-0 hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mx-4 lg:m-0  '>
          <img
            className='h-56 w-full object-cover rounded-md lg:rounded-none left-10 sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='https://bambooimport.com/wp-content/uploads/2021/08/Bamboo-Import-Header-Image.webp'
            alt=''
          />
        </div>
      </div>
      <div id='categories' className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-2xl mx-auto py-6 sm:py-12 lg:py-18 lg:max-w-none'>
            <h2 className='text-2xl text-center font-bold text-gray-900'>
              Collections
            </h2>
            <div className='mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6'>
              {callouts.map((callout) => (
                <div key={callout.name} className='group relative'>
                  <div className='relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className='w-full h-full object-center object-cover'
                    />
                  </div>
                  <p className='mt-6 text-base text-center font-semibold text-gray-900'>
                    {callout.name}
                  </p>
                  <h3 className='text-center text-sm text-gray-500'>
                    <Link to={`/products/${callout.category}`}>
                      <span className='absolute inset-0' />
                      {callout.description}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900 pb-6'>
            Products
          </h2>

          <Product start={0} end={4} />
        </div>
      </div>
      <div className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            {/* <h2 className='text-base text-green-600 font-semibold tracking-wide uppercase'>
            Transactions
          </h2> */}
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              <span className='text-green-500'>Why</span> Bamboo?
            </p>
            <p className='mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto'>
              Bamboo is a great natural product. Good for people and the
              environment. Iron strong in many ways. For thousands of years. And
              now even more so. Because the planting of bamboo helps
              substantially against the threat of global warming.
            </p>
          </div>
          {/* <div className='mx-auto lg:w-1/2 my-4'>
          <img
            className='object-cover rounded-lg'
            src='https://images.unsplash.com/photo-1558299244-f4bb4dd735b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
          />
        </div> */}
          <div className='mt-10'>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              {features.map((feature) => (
                <div key={feature.name} className='relative'>
                  <dt>
                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white'>
                      <feature.icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <p className='ml-16 text-lg leading-6 font-normal text-gray-900'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* <div className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='h-[40vh] bg-green-600 rounded-lg flex items-center justify-center flex-col px-4'>
            <h1 className='text-2xl md:text-3xl font-bold text-white text-center'>
              Want product news and updates?
            </h1>
            <h2 className='text-base text-gray-200'>
              Sign up for our newsletter.
            </h2>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start my-2'>
              <input
                type='email'
                placeholder='john@email.com'
                className='mb-2 rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500'
              />
              <button
                type='submit'
                className='w-24 md:ml-4 text-green-700 bg-white hover:bg-green-100 rounded-md h-10 transition-colors'>
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
