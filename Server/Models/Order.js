import mongoose from "mongoose";

const orderItemSchema= new mongoose.Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    productSubtotal: { type: Number, required: true }
});
 const orderSchema= new mongoose.Schema({
    orderNumber: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerAddress: { type: String, required: true },
    orderStatus: { type: String, enum: ['pending', 'processing', 'completed', 'cancelled'], default: 'pending' },
    orderDate: { type: Date, default: Date.now },
    orderItems: [orderItemSchema],
    orderTotal: { type: Number, required: true }
 });
 const Order= mongoose.model("Order",orderSchema);
 export default Order;