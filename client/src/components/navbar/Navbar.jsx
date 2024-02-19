import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link } from "react-router-dom"
import { FavoriteBorderOutlined, FavoriteOutlined, PersonOutline, Search, ShoppingCartOutlined, Store, StoreOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from "react-redux"
import useComponentVisible from '../../utils/useComponentVisible'
import newRequest from '../../utils/newRequest'

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)
    // console.log(quantity)
    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState("")
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await newRequest.get(
                    cat
                        ? `/product?category=${cat}`
                        : "/product"
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [cat]);

    // console.log(products)

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <Link to="/" ><div className="logo">
                        <img src="/img/logos/logo.png" alt="" />
                        {/* <h1>ANIWEEB</h1> */}
                    </div></Link>
                </div>
                <div className="center">
                    {/* <span>EN</span> */}
                    <div className="searchContainer" ref={ref} onClick={() => setIsComponentVisible(!isComponentVisible)} >
                        <Search style={{ color: "gray", fontSize: 25 }} />
                        <input type="text" placeholder='Search for T-Shirts, Hoodies or More' onChange={e => setCat(e.target.value)} />

                        {/* search icon */}
                    </div>
                    {isComponentVisible && <div className="searchResult">
                        {
                            products.map((item) => (
                                <Link to={`/product/${item._id}`} className="resultContainer link" >
                                    <img src={`/upload/${item.img}`} alt="" />
                                    <h2>{item.title}</h2>
                                </Link>
                            ))
                        }
                    </div>}
                </div>

                <div className="right">
                    <Link className='link' to="./account" ><h1> <PersonOutline />  ACCOUNT</h1> </Link>
                    <Link className='link' to='/wishlist' > <h1> <FavoriteBorderOutlined /> WHISHLIST</h1> </Link>
                    <Link className='link' to='./orders' > <h1 style={{ flexDirection: "column", gap: "0px", marginTop: "-9px" }} ><span>Returns &</span> ORDERS</h1> </Link>
                    {/* <PersonOutline style={{ fontSize: 28 }} /> */}

                    <Link className='link' to='/cart' >
                        <div className="cartIcon">
                            <Badge badgeContent={quantity} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                            <h1>CART</h1>
                        </div>
                    </Link>

                    {/* cart icon */}
                </div>
            </div>
        </div>
    )
}

export default Navbar