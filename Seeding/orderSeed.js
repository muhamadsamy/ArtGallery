// seedOrders.js

import mongoose from 'mongoose';
import Order from '../Server/Models/Order.js';
import connectDB from "../Server/Models/db.js";

connectDB();

// Sample orders data
const orders = [
  {
    orderNumber: 'ORD003',
    customerName: 'Alice Johnson',
    customerEmail: 'alice.johnson@example.com',
    customerPhone: '5551234567',
    customerAddress: '789 Elm St, City, Country',
    orderStatus: 'completed',
    orderDate: new Date('2023-03-10'),
    orderItems: [
      {
        productName: 'Product D',
        productPrice: 60,
        productQuantity: 2,
        productSubtotal: 120
      },
      {
        productName: 'Product E',
        productPrice: 25,
        productQuantity: 3,
        productSubtotal: 75
      }
    ],
    orderTotal: 195
  },
  {
    orderNumber: 'ORD004',
    customerName: 'Bob Williams',
    customerEmail: 'bob.williams@example.com',
    customerPhone: '5559876543',
    customerAddress: '321 Oak Ave, City, Country',
    orderStatus: 'pending',
    orderDate: new Date('2023-04-20'),
    orderItems: [
      {
        productName: 'Product F',
        productPrice: 35,
        productQuantity: 4,
        productSubtotal: 140
      }
    ],
    orderTotal: 140
  }
];


// Function to seed orders data
const seedOrders = async () => {
   
        try {
          await Order.deleteMany(); // Clear existing products
          await Order.insertMany(orders); // Insert new products
          console.log('Products seeded successfully');
          process.exit(); // Exit process after seeding
        } catch (error) {
          console.error('Error seeding products:', error);
          process.exit(1); // Exit with failure
        }
      };


// Call the seeding function
seedOrders();
