
import Customer from "../Server/Models/Customer.js";
import connectDB from "../Server/Models/db.js";

connectDB();

const customers =[
    { name: 'sam Doe', email: 'sam@example.com',password:"123456", phone: '123-456-7890', address: '123 Main St' },
    { name: 'kort Smith', email: 'kort@test.com',password:"4566789", phone: '987-654-3210', address: '456 Elm St' }
];
const seedCustomers = async () => {
    try {
      await Customer.deleteMany(); // Clear existing customers
      await Customer.insertMany(customers); // Insert new customers
      console.log('Customers seeded successfully');
      process.exit(); // Exit process after seeding
    } catch (error) {
      console.error('Error seeding customers:', error);
      process.exit(1); // Exit with failure
    }
  };
  
  seedCustomers();