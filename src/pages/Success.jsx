import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { clearCart } from '../redux/cartRedux';
import { userRequest } from '../requestMethods';

const Success = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state?.midtransData;
  const cart = location.state?.products;
  const input = location.state?.input;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (
      data?.transaction_status == 'capture' ||
      data?.transaction_status == 'settlement'
    ) {
      setStatus('success');
    } else {
      setStatus(data?.transaction_status);
    }

    const createOrder = async () => {
      try {
        const res = await userRequest.post('/orders', {
          orderId: data.order_id,
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: input.address,
          status: status,
        });
        if (res.status === 200) {
          setOrderId(data.order_id);
          setIsLoading(false);
        }
        // console.log(res.data);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    data && createOrder();
    console.log(status);
  }, [cart, data, currentUser, input]);

  const currency = (total) => {
    const curr = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(total);
    return curr;
  };

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  console.log(data);
  return (
    <div className='h-100 flex flex-col items-center justify-center'>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <div className='mt-10 mb-6 order-first '>
        <p className='font-semibold text-lg'>Order summary</p>
        <div className='flex max-w-full h-fit max-h-fit space-y-4 px-6 mt-4 pb-6 bg-white border-gray-200 border-[1px] rounded-md'>
          <div className='flex basis-full flex-col divide-y-[1px] '>
            {cart.products.map((product) => (
              <li
                key={`${product._id}/${product.dimension}`}
                className='flex py-6'>
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
                    </div>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.color}
                    </p>
                  </div>
                  <div className='flex flex-1 items-end justify-between text-sm'>
                    <p>{currency(product.price)}</p>

                    <div className='flex'>
                      <p className='text-gray-500'>Qty {product.quantity}</p>
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
                    <p>{currency(cart.total)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/'} onClick={() => dispatch(clearCart())}>
        <button className='p-10 m-20'>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
