import Order from "../Models/Order.js";

const createOrder = async (req, res) => {
  const { customerName,customerEmail, customerPhone, customerAddress, orderItems, orderTotal } = req.body;
  const orderNumber = `ORD-${Date.now()}`; // Generate a unique order number

  const newOrder = new Order({
      orderNumber,
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      orderStatus: 'pending',
      orderItems,
      orderTotal
  });

  try {
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
  } catch (error) {
      res.status(500).json({ mes: error.message });
  }
};

const listOrders=async(req,res)=>{
    try{
        const orders=  await Order.find();
        res.json(orders);
    } catch(error){
        res.status(500).json({messag: err.messag});
    }
};

const searchOrders = async (req, res) => {
  const { orderNumber } = req.params; // Extract orderNumber from req.params

  try {
      if (!orderNumber) {
          return res.status(400).json({ message: 'Order number is required in query parameters.' });
      }

      const order = await Order.findOne({ orderNumber });

      if (!order) {
          return res.status(404).json({ message: `Couldn't find order with order number ${orderNumber}` });
      }

      res.json(order);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

  



const viewOrderDetails = async (req, res) => {
  const { id } = req.params;

  try {
      const order = await Order.findById(id);

      if (!order) {
          return res.status(404).json({ message: 'Order not found.' });
      }

      res.json(order);
  } catch (err) {
      if (err.name === 'CastError') {
          return res.status(400).json({ message: 'Invalid order ID format.' });
      }
      res.status(500).json({ message: err.message });
  }
};


const getOrderHistory = async (req, res) => {
  try {
    const {email} = req.params; 
    const orders = await Order.find({customerEmail : email})
      .select('orderNumber orderStatus orderDate orderItems orderTotal customerName customerEmail customerAddress customerPhone')
      .sort({ orderDate: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

  
  
 
  

const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { orderStatus } = req.body;
  
    try {
      const updatedOrder = await Order.findByIdAndUpdate(id, { orderStatus }, { new: true });
  
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found.' });
      }

      res.json({ message: 'Order status updated successfully.', order: updatedOrder });
    } catch (err) {
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid order ID format.' });
      }
      res.status(500).json({ message: err.message });
    }
  };
      
      export { createOrder ,listOrders, searchOrders, viewOrderDetails, getOrderHistory,updateOrderStatus };
    
    
    
