import express from "express"
import { getCartItems, createCart, updateCart, getUsersCart, deleteCart } from "../controllers/cart.controller.js"
import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()

router.post("/", verifyToken, createCart);
router.put("/:id", verifyToken, updateCart);
router.delete("/:id", verifyToken, deleteCart);
router.get("/find/:userId", verifyToken, getUsersCart);
router.get("/", verifyToken, getCartItems);


export default router 