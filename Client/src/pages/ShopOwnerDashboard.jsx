import  { useEffect, useState } from 'react';
import axios from 'axios';

const ShopOwnerDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders').then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-orange-500">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Shop Owner Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Order Date</th>
                <th className="px-4 py-2">Order Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{order._id}</td>
                  <td className="px-4 py-2">{order.customerName}</td>
                  <td className="px-4 py-2">{order.orderDate}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block py-1 px-2 rounded-full ${
                        order.orderStatus === 'Pending'
                          ? 'bg-yellow-500 text-white'
                          : order.orderStatus === 'Confirmed'
                          ? 'bg-blue-500 text-white'
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ShopOwnerDashboard;
