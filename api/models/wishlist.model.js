import mongoose from "mongoose";

const { Schema } = mongoose;

const wishListSchema = new Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
);

export default mongoose.model("WishList", wishListSchema)