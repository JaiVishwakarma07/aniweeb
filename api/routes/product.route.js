import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller.js"
import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()

router.post("/", verifyToken, createProduct)
router.delete("/:id", verifyToken, deleteProduct)
router.get("/single/:id", verifyToken, getProduct)
router.get("/", getProducts)
router.put("/:id", verifyToken, updateProduct)

export default router