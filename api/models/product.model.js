import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    totalStars: {
        type: Number,
        default: 0,
    },
    starNumber: {
        type: Number,
        default: 1,
    },
    size: {
        type: Array,
        default: ["XS", "S", "M", "L", "XL"]
    },
    color: {
        type: Array
    },
    inStock: {
        type: Boolean,
        default: true
    }
},
    { timestamps: true }
);

export default mongoose.model("Product", productSchema)