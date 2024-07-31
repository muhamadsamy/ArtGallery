import express from "express";
import { listOrders ,searchOrders , viewOrderDetails , updateOrderStatus, createOrder, getOrderHistory } from "../Controllers/orderController.js";
import { isAdmin ,isUser } from "../MiddleWares/auth.js";
import authMiddleware from "../MiddleWares/authentiacation.js";

const router= express.Router();

router.get('/orders/:orderNumber',searchOrders); 
router.get('/orders/id/:id', viewOrderDetails); 
router.post('/orders', createOrder);
router.get("/orders",listOrders);
router.get("/orders/email/:email",getOrderHistory);
router.put('/orders/:id', updateOrderStatus); 

export default router;
