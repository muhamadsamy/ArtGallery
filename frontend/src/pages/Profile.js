import React, { useState, useEffect } from 'react';
import { Table, Container, Spinner, Card } from 'react-bootstrap';
import { fetchOrdersByEmail } from '../api';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cust , setCust]= useState({});
  const [email, setEmail] = useState('');

  // Mock data for demonstration

  const fetchUser = async () => {
    const customerString = localStorage.getItem('customer');
    if (customerString) {
      try {
        const customer = JSON.parse(customerString);
        setCust(customer);
      } catch (error) {
        console.error('Error parsing customer data from local storage', error);
      }
    }
  };


  useEffect(() => {
    fetchUser()
    setEmail(cust.email)
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/orders/email/${cust.email}`);
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching orders');
      }
    };

    fetchOrders();
  }, [email]);




  if (loading) return <Spinner animation="border" />;
  if (error) return <div style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</div>;

  return (
    <Container style={{ backgroundColor:'#f0e68c', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', marginTop:150 , marginBottom:200 }}>
      <h1 className="mb-4" style={{ fontFamily: 'Georgia, serif', color: '#003366', textAlign: 'center' }}>Order History</h1>
      <Table striped bordered hover responsive style={{ backgroundColor: '#ffffff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <thead style={{ backgroundColor: '#4CAF50', color: '#ffffff', textAlign: 'center' }}>
          <tr>
            <th style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', padding: '10px' }}>Order Number</th>
            <th style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', padding: '10px' }}>Status</th>
            <th style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', padding: '10px' }}>Date</th>
            <th style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', padding: '10px' }}>Total</th>
            <th style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', padding: '10px' }}>Items</th>
            <th style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', padding: '10px' }}>Customer</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id} style={{ borderBottom: '2px solid #e0e0e0' }}>
              <td style={{ textAlign: 'center', padding: '10px', color: '#333' }}>{order.orderNumber}</td>
              <td style={{ textAlign: 'center', padding: '10px', color: order.orderStatus === 'Shipped' ? 'green' : 'orange' }}>{order.orderStatus}</td>
              <td style={{ textAlign: 'center', padding: '10px', color: '#555' }}>{new Date(order.orderDate).toLocaleDateString()}</td>
              <td style={{ textAlign: 'center', padding: '10px', color: '#007bff' }}>${order.orderTotal.toFixed(2)}</td>
              <td>
                <ul style={{ paddingLeft: '0', listStyleType: 'none', margin: '0' }}>
                  {order.orderItems.map(item => (
                    <li key={item._id} style={{ fontFamily: 'Arial, sans-serif', marginBottom: '6px', color: '#333' }}>
                      {item.productName} (x{item.productQuantity}) - ${item.productPrice.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <Card style={{ width: '18rem', margin: '0 auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                  <Card.Body>
                    <Card.Title style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#003366' }}>{order.customerName}</Card.Title>
                    <Card.Subtitle className="mb-2" style={{ color: '#666' }}>{order.customerEmail}</Card.Subtitle>
                    <Card.Text style={{ color: '#333' }}>
                      Phone: {order.customerPhone}<br />
                      Address: {order.customerAddress}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderHistory;
