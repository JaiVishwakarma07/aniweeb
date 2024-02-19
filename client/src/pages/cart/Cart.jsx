import React, { useState } from 'react'
import './cart.scss'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import { Add, Remove } from '@material-ui/icons'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };
    return (
        <div className="cart">
            <Navbar />
            <Announcement />
            <div className="wrapperCart">
                <h1 className="title">YOUR BAG</h1>
                <div className="top">
                    <button className="topButton" style={{ border: "1px solid black", backgroundColor: "transparent" }} onClick={() => navigate('/')} >CONTINUE SHOPPING</button>
                    <div className="topTexts">
                        <span className="topText">Shopping Bag(2)</span>
                        <Link className='link' to='/wishlist' ><span className="topText">Your WhishList (0)</span></Link>
                    </div>
                    <button className="topButton" style={{ border: "filled", backgroundColor: "black", color: 'white' }}>CHECKOUT NOW</button>
                </div>
                <div className="bottom">
                    <div className="info">
                        <div className="cartProduct">
                            <div className="cartProductDetail">
                                <img src="/img/oversized/zorooversize.png" alt="" />
                                <div className="details">
                                    <span className="cartProductName"> RORONOA ZORO OVERSIZED UNISEX T-SHIRT - LIGHTGREEN - M </span>
                                    <span className="cartProductId"><b>ID:</b> 12345 </span>
                                    <div className="cartProductColor" style={{ backgroundColor: "lightgreen" }} ></div>
                                    <span className="cartProductSize"><b>Size:</b> M </span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="cartProductAmountContainer">
                                    <Add />
                                    <div className="cartProductAmount">1</div>
                                    <Remove />
                                </div>
                                <div className="cartProductPrice">₹699</div>
                            </div>
                        </div>
                        <hr />
                        <div className="cartProduct">
                            <div className="cartProductDetail">
                                <img src="/img/oversized/gojooversize.png" alt="" />
                                <div className="details">
                                    <span className="cartProductName">  GOJO OVERSIZED T- SHIRT </span>
                                    <span className="cartProductId"><b>ID:</b> 127645 </span>
                                    <div className="cartProductColor" style={{ backgroundColor: "black" }} ></div>
                                    <span className="cartProductSize"><b>Size:</b> L </span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="cartProductAmountContainer">
                                    <Add onClick={() => handleQuantity("inc")} />
                                    <div className="cartProductAmount">{quantity}</div>
                                    <Remove onClick={() => handleQuantity("dec")} />
                                </div>
                                <div className="cartProductPrice">₹799</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h1 className="summaryTitle">ORDER SUMMARY</h1>
                        <div className="summaryItem">
                            <span className="summaryItemText">Subtotal</span>
                            <span className="summaryItemPrice">₹1298</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryItemText">Estimated Shipping</span>
                            <span className="summaryItemPrice">₹150</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryItemText">Shipping Discount</span>
                            <span className="summaryItemPrice">₹150</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryItemText">Total</span>
                            <span className="summaryItemPrice">₹1298</span>
                        </div>
                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart