import {
  LockClosedIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { customAlphabet } from 'nanoid';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import { publicRequest } from '../requestMethods';
import { removeProduct } from '../redux/cartRedux';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    province: '',
    city: '',
    postalCode: '',
    phone: '',
  });
  const [orderId, setOrderId] = useState('');
  const [midtransToken, setMidtransToken] = useState(null);
  const [shippingPrice, setShippingPrice] = useState(null);

  const {
    email,
    firstName,
    lastName,
    address,
    province,
    city,
    postalCode,
    phone,
  } = formData;

  const nanoid = customAlphabet('1234567890abcdef', 10);

  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleChange = async (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setOrderId(nanoid(6));
    // console.log(inputs);
  };

  useEffect(() => {
    if (cart.quantity == 0) {
      history.push('/');
    }
    setShippingPrice(100000 * cart.quantity);
  }, [cart]);

  const currency = (total) => {
    const curr = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(total);
    return curr;
  };

  const onDelete = (id, price, quantity) => {
    const confirmBox = window.confirm(
      'Do you really want to remove this product?'
    );
    if (confirmBox == true) {
      dispatch(removeProduct(id, price, quantity));

      // if (cart.quantity == 0) {
      //   history.push('/');
      // }

      if (isSuccess) {
        toast.success(message);
      }
    }
  };

  const payHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      firstName,
      lastName,
      address,
      province,
      city,
      postalCode,
      phone,
    };
    try {
      const res = await publicRequest.post('/payment/', {
        nanoid: orderId,
        total: cart.total + 100000,
        products: cart.products.map((item) => [
          {
            productId: item._id,
            price: item.price,
            quantity: item.quantity,
            name: item.title,
            category: item.categories,
            merchant_name: 'BambooCommerce',
          },
          {
            id: 'item1',
            price: 100000,
            quantity: 1,
            name: 'Shipping Fee',
          },
        ]),
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        city: userData.city,
        postal_node: userData.postalCode,
      });
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
            input: formData,
          });
          console.log(result, cart);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert('wating your payment!');
          history.push('/success', {
            midtransData: result,
            products: cart,
            input: formData,
          });
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
              <form
                id='checkoutForm'
                className=' space-y-10'
                onSubmit={payHandler}
              >
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
                      onChange={handleChange}
                      required
                    />
                    <div className='w-full border-b-[1px] my-10 border-b-gray-200'></div>
                  </div>
                  <p className='font-semibold text-lg'>Shipping information</p>
                  <div className='grid grid-rows-2 space-y-0 space-x-0 lg:flex lg:space-y-0 lg:space-x-6'>
                    <div className='lg:flex-auto'>
                      <Input
                        htmlFor='firstName'
                        label='First name'
                        id='firstName'
                        name='firstName'
                        type='text'
                        autoComplete='firstName'
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='lg:flex-auto'>
                      <Input
                        htmlFor='lastName'
                        label='Last name'
                        id='lastName'
                        name='lastName'
                        type='text'
                        autoComplete='lastName'
                        onChange={handleChange}
                        required
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
                    required
                  />
                  <Input
                    htmlFor='province'
                    label='Province'
                    id='province'
                    name='province'
                    type='text'
                    autoComplete='province'
                    onChange={handleChange}
                    required
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
                        required
                      />
                    </div>
                    <div className='lg:flex-auto'>
                      <Input
                        htmlFor='postalCode'
                        label='Postal code'
                        id='postalCode'
                        name='postalCode'
                        type='text'
                        autoComplete='postalCode'
                        onChange={handleChange}
                        required
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
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:hidden'
                >
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
                        className='flex py-6'
                      >
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
                            <p>{currency(cart.total + shippingPrice)}</p>
                          </div>
                        </div>
                      </div>

                      <button
                        type='submit'
                        form='checkoutForm'
                        className='group relative w-full md:flex justify-center py-4 px-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hidden'
                      >
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
