import React from 'react'
import './product.scss'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';


const Product = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div className="product">
            <div className="circle"></div>
            <img src={`/upload/${item.img}`} alt="" />
            <div className="info">
                <span className='itemTitle'>{item.title}</span>
                <div className="iconContainer">
                    <div className="icon" > <ShoppingCartOutlined /> </div>
                    <div className="icon" onClick={() => navigate(`/product/${item._id}`)} > <SearchOutlined /> </div>
                    <div className="icon"> <FavoriteBorderOutlined /> </div>
                </div>
            </div>
        </div>
    )
}

export default Product