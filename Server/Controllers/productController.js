import Product from '../models/product.js';

// Create a new product
export const createProduct = async (req, res) => {
  const { Name, Description, Price, Stock, Category, Status } = req.body;
  const Image = req.file ? req.file.path : null;

  try {
    const product = new Product({ Name, Description, Price, Stock, Image, Category, Status });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  const { Name, Description, Price, Stock, Category, Status } = req.body;
  const Image = req.file ? req.file.path : null;

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.Name = Name || product.Name;
    product.Description = Description || product.Description;
    product.Price = Price || product.Price;
    product.Stock = Stock || product.Stock;
    product.Image = Image || product.Image;
    product.Category = Category || product.Category;
    product.Status = Status || product.Status;

    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
