import express from "express"
import { getOrders, createOrder, updateOrder, getIncome, getUserOrders, deleteOrders } from "../controllers/order.controller.js"
import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.put("/:id", verifyToken, updateOrder);
router.get("/find/:userId", verifyToken, getUserOrders);
router.delete("/:id", verifyToken, deleteOrders);
router.get("/income", verifyToken, getIncome);



export default router 