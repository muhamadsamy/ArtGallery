import express from "express";
import { listOrders ,searchOrders , viewOrderDetails , updateOrderStatus } from "../Controllers/orderController.js";
import { isAdmin ,isUser } from "../MiddleWares/auth.js";

const router= express.Router();


router.get("/orders",listOrders);
router.get('/orders?=orderNumber',searchOrders); 
router.get('/orders/:id',viewOrderDetails); 
router.put('/orders/:id', updateOrderStatus); 

export default router;