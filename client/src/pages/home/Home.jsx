import React from 'react'
import './home.scss'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'
import { popularProducts } from "../../../data"


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <img src="/img/logos/banner.jpg" alt="" style={{ width: "100%" }} />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home