export const navigation = {
  categories: [
    {
      id: 'products',
      name: 'Products',
      featured: [
        {
          name: 'New Arrivals',
          href: '/products',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'outdoors',
          name: 'Outdoors',
          items: [
            { name: 'Bamboo Fences', href: '#' },
            { name: 'Bamboo Gate Doors', href: '#' },
            { name: 'Bamboo Mats', href: '#' },
            { name: 'Bamboo Poles', href: '#' },
            { name: 'Bamboo Poles Half Round', href: '#' },
            { name: 'Bamboo Pergolas', href: '#' },
            { name: 'Bamboo Borders', href: '#' },
            { name: 'Bamboo Slats', href: '#' },
          ],
        },
        {
          id: 'indoors',
          name: 'Indoors',
          items: [
            { name: 'Bamboo & Reed Roller Blinds', href: '#' },
            { name: 'Bamboo Room Dividers', href: '#' },
          ],
        },
        // {
        //   id: 'building',
        //   name: 'Building',
        //   items: [
        //     { name: 'Full Nelson', href: '#' },
        //     { name: 'My Way', href: '#' },
        //     { name: 'Re-Arranged', href: '#' },
        //     { name: 'Counterfeit', href: '#' },
        //     { name: 'Significant Other', href: '#' },
        //   ],
        // },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};

export const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/products/1',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

export const subCategories = [
  { name: 'Bamboo Poles', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
];

export const filters = [
  {
    id: 'outside',
    name: 'Outside',
    options: [
      {
        value: 'outside',
        label: 'All Products',
        checked: false,
        href: '#',
      },
      {
        value: 'bamboo fence',
        label: 'Bamboo Fence',
        checked: false,
        href: '#',
      },
      {
        value: 'bamboo gate door',
        label: 'Bamboo Gate Door',
        checked: false,
        href: '#',
      },
      { value: 'bamboo mats', label: 'Bamboo Mats', checked: true, href: '#' },
      {
        value: 'bamboo poles',
        label: 'Bamboo Poles',
        checked: false,
        href: '#',
      },
      {
        value: 'bamboo poles half round',
        label: 'Bamboo Poles Half Round',
        checked: false,
        href: '#',
      },
      {
        value: 'bamboo pergolas',
        label: 'Bamboo Pergolas',
        checked: false,
        href: '#',
      },
      {
        value: 'bamboo borders',
        label: 'Bamboo Borders',
        checked: false,
        href: '#',
      },
      {
        value: 'bamboo slats',
        label: 'Bamboo Slats',
        checked: false,
        href: '#',
      },
    ],
  },
  {
    id: 'inside',
    name: 'Inside',
    options: [
      {
        value: 'bamboo and red roller blinds',
        label: 'Bamboo & Reed Roller Blinds',
        checked: false,
        href: '#',
      },
      {
        value: 'bamboo room dividers',
        label: 'Bamboo Room Dividers',
        checked: false,
        href: '#',
      },
    ],
  },
  // {
  //   id: 'category',
  //   name: 'Category',
  //   options: [
  //     { value: 'outside', label: 'New Arrivals', checked: false, href: '#' },
  //     { value: 'sale', label: 'Sale', checked: false, href: '#' },
  //     { value: 'travel', label: 'Travel', checked: true, href: '#' },
  //     {
  //       value: 'organization',
  //       label: 'Organization',
  //       checked: false,
  //       href: '#',
  //     },
  //     { value: 'accessories', label: 'Accessories', checked: false, href: '#' },
  //   ],
  // },
];
