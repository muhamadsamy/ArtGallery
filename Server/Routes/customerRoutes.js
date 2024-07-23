import express from "express";
import listCustomers from "../Controllers/customerController.js";
import { isAdmin } from "../MiddleWares/auth.js";

const router=express.Router();

router.get("/customers",isAdmin,listCustomers);


export default router;