import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
    { timestamps: true }
);

export default mongoose.model("User", userSchema)