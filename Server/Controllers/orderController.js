import Order from "../Models/Order.js";

const listOrders=async(req,res)=>{
    try{
        const orders=  await Order.find();
        res.json(orders);
    } catch(error){
        res.status(500).json({messag: err.messag});
    }
};

const searchOrders = async (req, res) => {
    
  
    try {
      if (!orderNumber) {
        return res.status(400).json({ message: 'Order number is required in query parameters.' });
      }
  
      const orders = await Order.findById(req.params.orderNumber);
  
      if (orders.length === 0) {
        return res.status(404).json({ message: `Couldn't find order with order number ${orderNumber}` });
      }
  
      res.json(orders);
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
      
      export { listOrders, searchOrders, viewOrderDetails, updateOrderStatus };
    