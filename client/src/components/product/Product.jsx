import React from 'react'
import './product.scss'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';

const Product = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const notifySuccess = () => {
        toast.success('Added to Cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
        });
    }


    const handleClick = (product) => {
        dispatch(addProduct({ product }))
        notifySuccess()
    }
    return (
        <div className="product">
            <div className="circle"></div>
            <img src={`/upload/${item.img}`} alt="" />
            <div className="info">
                <span className='itemTitle'>{item.title}</span>
                <div className="iconContainer">
                    <div className="icon" onClick={() => handleClick(item)}  > <ShoppingCartOutlined />
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        // transition: Bounce,
                        /></div>
                    <div className="icon" onClick={() => navigate(`/product/${item._id}`)} > <SearchOutlined /> </div>
                    <div className="icon"> <FavoriteBorderOutlined /> </div>

                </div>
            </div>
        </div>
    )
}

export default Product