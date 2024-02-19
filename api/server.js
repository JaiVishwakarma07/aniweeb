import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import productRoute from "./routes/product.route.js"
import orderRoute from "./routes/order.route.js"
import cartRoute from "./routes/cart.route.js"
import multer from "multer"

const app = express()
dotenv.config()
mongoose.set('strictQuery', true)

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected")
    } catch (err) {
        console.log(err);
    }
}

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

//routes

// image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    console.log(file);
    res.status(200).json(file.filename)
})
//upload ends

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/product", productRoute)
app.use("/api/order", orderRoute)
app.use("/api/cart", cartRoute)



app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";

    return res.status(errorStatus).send(errorMessage)
})

app.listen(8800, () => {
    connect();
    console.log("api working")
})