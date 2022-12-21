import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { userRequest } from '../requestMethods';

const Orders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const { _id } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getUserOrders = async () => {
      setIsLoading(true);
      try {
        const res = await userRequest.get(`orders/find/${_id}`);
        setOrders(res.data.data);
        setIsLoading(false);
        // console.log(res.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error.response.data);
        setOrders([]);
      }
    };
    getUserOrders();
  }, []);

  // console.log(orders);

  return (
    <>
      <Navbar />
      <div className='bg-white mb-4'>
        <div className='relative mx-auto px-8 my-6'>
          <div className='mb-6'>
            <p className='font-semibold text-lg'>Your Orders</p>
          </div>
          <div className='overflow-x-auto relative shadow-md border-[1px] border-gray-200 rounded-md sm:rounded-lg'>
            <div className='max-w-full h-fit max-h-fit space-y-4 px-6 mt-4 pb-6 bg-white'>
              <div className='divide-y divide-solid'>
                {orders.map((items) => (
                  <div key={items._id} className='mt-4'>
                    <section className='block relative p-4 rounded-md '>
                      <div className='flex justify-between items-center mb-4'>
                        <div className='inline-flex items-center'>
                          <div className='mr-3 text-sm'>
                            {items.createdAt.substring(0, 10)}
                          </div>
                          {items.status == 'pending' ? (
                            <div className='rounded-[4px] bg-blue-200 text-blue-600 px-2 flex-nowrap flex-shrink-0 inline-flex mr-3 text-sm'>
                              {items.status}
                            </div>
                          ) : (
                            <div className='rounded-[4px] bg-green-200 text-green-600 px-2 flex-nowrap flex-shrink-0 inline-flex mr-3 text-sm'>
                              {items.status}
                            </div>
                          )}
                          <div className='mr-3 text-sm'>{items.orderId}</div>
                        </div>
                      </div>
                      <div className='flex'>
                        <div className='flex-grow w-[calc(100%-180px)]'>
                          {items.products.map((prod) => (
                            <div key={prod.productId} className='flex w-full'>
                              <div className='flex-shrink-0 mr-4 w-[60px] h-[60px]'>
                                <img
                                  className='block max-w-[60px] max-h-[60px] rounded'
                                  src={prod.img}
                                  alt=''
                                />
                              </div>
                              <div className='w-full'>
                                <div>
                                  <h6 className='block relative font-extrabold leading-4 mb-1 whitespace-nowrap overflow-ellipsis text-base'>
                                    {prod.productName}
                                  </h6>
                                </div>
                                <div>
                                  <p className='mb-1 text-sm block relative font-normal text-gray-400'>
                                    {prod.quantity}x {prod.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className='inline-flex items-center w-[180px] justify-start pl-6 border-l border-solid'>
                          <div>
                            <p className=''>Total</p>
                            <p className=''>Rp. {items.amount}</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-end mt-7'>
                        <div>
                          <Link to={'/invoice/' + items._id}>
                            <p className='text-green-600 cursor-pointer'>
                              Details
                            </p>
                          </Link>
                        </div>
                      </div>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
