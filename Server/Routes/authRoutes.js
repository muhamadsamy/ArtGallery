import express from 'express';
import { registerUser, loginUser, logoutUser } from "../Controllers/authController.js"
import { check } from 'express-validator';

const router = express.Router();

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  [
    check('name', 'Please enter a username').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  registerUser
);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  loginUser
);

// @route   GET api/auth/logout
// @desc    Logout user
// @access  Private (only logged-in users)
router.get('/logout', logoutUser);

export default router;
