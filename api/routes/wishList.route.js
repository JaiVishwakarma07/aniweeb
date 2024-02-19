import express from "express"
import { createWishList, getWishList, deleteWishList } from "../controllers/wishList.controller.js"
import { verifyToken } from "../middleware/jwt.js"

const router = express.Router()

router.post("/", verifyToken, createWishList);
router.get("/:userId", verifyToken, getWishList);
router.delete("/:id", verifyToken, deleteWishList);

export default router 