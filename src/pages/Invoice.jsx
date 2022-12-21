import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { userRequest } from '../requestMethods';

const Invoice = () => {
  const location = useLocation();
  const orderId = location.pathname.split('/')[2];
  const [order, setOrder] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  console.log(orderId);

  useEffect(() => {
    const getOrder = async () => {
      setIsFetching(true);
      await userRequest
        .get(`/orders/findOrder/${orderId}`)
        .then((res) => {
          setOrder(res.data.data);
          setIsFetching(false);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          setIsFetching(false);
        });
    };
    getOrder();
  }, [orderId]);

  return (
    <div>
      <thead>
        <th>test</th>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
        </tr>
      </tbody>
    </div>
  );
};

export default Invoice;
