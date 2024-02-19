import React from 'react'
import './categoryItem.scss'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div className="categoryItem">
            <img src={item.img} alt="" />
            <div className="info">
                <h1>{item.title}</h1>
                <button onClick={() => navigate(`/products?category=${item.category}`)} >SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoryItem