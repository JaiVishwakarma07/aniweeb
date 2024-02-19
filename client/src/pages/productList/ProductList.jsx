import React, { useState } from 'react'
import './productList.scss'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Products from '../../components/products/Products'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'


const ProductList = () => {
    const { search } = useLocation();
    const cat = search.substring(10);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    // console.log(cat)


    return (
        <div className="productList">
            <Navbar />
            <Announcement />
            <h1 className="title">Explore Our Exclusive T-Shrit Collection</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span className="filterText">Filter Products:</span>
                    <select name="color" defaultValue="Color" id="" onChange={handleFilters}>
                        <option disabled >
                            Color
                        </option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                    <select name="size" id="" onChange={handleFilters}>
                        <option disabled selected>
                            Size
                        </option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className="filter">
                    <span className="filterText">
                        <select name="" id="" onChange={(e) => setSort(e.target.value)}>
                            <option selected>Newest</option>
                            <option value="">Price Low to High</option>
                            <option value="">Price High to Low</option>
                        </select>
                    </span>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ProductList