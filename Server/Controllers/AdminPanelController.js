import Product from '../Models/Product.js';
import Order from '../Models/Order.js';
import User from '../Models/User.js';

// Products

export const listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createProduct = async (req, res) => {
    const { Name, Description, Price, Stock, Image, Category, Status } = req.body;

    try {
        const newProduct = new Product({
            Name,
            Description,
            Price,
            Stock,
            Image,
            Category,
            Status
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { Name, Description, Price, Stock, Image, Category, Status } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            Name,
            Description,
            Price,
            Stock,
            Image,
            Category,
            Status
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Orders

export const listOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, { orderStatus: status }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Customers

export const listCustomers = async (req, res) => {
    try {
        const customers = await User.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
