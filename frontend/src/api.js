import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Optional: set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const fetchProducts = () => axiosInstance.get('/products');
export const fetchProductById = (id) => axiosInstance.get(`/products/${id}`);
export const createProduct = (data) => axiosInstance.post('/products', data);
export const updateProduct = (id, data) => axiosInstance.put(`/products/${id}`, data);
export const deleteProduct = (id) => axiosInstance.delete(`/products/${id}`);

export const fetchOrders = () => axiosInstance.get('/orders');
export const fetchOrderById = (id) => axiosInstance.get(`/orders/id/${id}`);
export const updateOrderStatus = (id, data) => axiosInstance.put(`/orders/${id}`, data);

export const registerUser = (data) => axiosInstance.post('/register', data);
export const loginUser = (data) => axiosInstance.post('/login', data);
export const logoutUser = () => axiosInstance.get('/logout');
