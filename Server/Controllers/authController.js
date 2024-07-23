import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

import config from '../Config/config.js';
import Customer from '../Models/Customer.js';


// @route   POST api/auth/register
// @desc    Register user
// @access  Public
export const registerUser = async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password ,phone ,address } = req.body;

  try {
    // Check if user already exists
    let customer = await Customer.findOne({ email });
    if (customer) {
      return res.status(400).json({ msg: 'Customer already exists' });
    }

    // Create new user
    customer = new Customer({
      name,
      email,
      password,
      phone,
      address
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    customer.password = await bcrypt.hash(password, salt);

    // Save Customer to database
    await customer.save();

    // Generate JWT token
    const payload = {
      Customer: {
        id: customer.id,
      },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   POST api/auth/login
// @desc    Authenticate Customer & get token
// @access  Public
export const loginUser = async (req, res) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Check if Customer exists
    let customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Generate JWT token
    const payload = {
      Customer: {
        id: customer.id,
      },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
// @route   GET api/auth/logout
// @desc    Logout (clear token)
// @access  Private (only logged-in Customers)
export const logoutUser = async (req, res) => {
    res.clearCookie('token');
    res.json({ msg: 'Logged out successfully' });
  };

// Export other auth-related functions if needed
