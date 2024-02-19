import React, { useState } from 'react'
import "./account.scss"
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar"
import Announcement from "../../components/announcement/Announcement"

const Account = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [addOpen, setAddOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout")
            localStorage.setItem("currentUser", null)
            navigate("/login")

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="account">
            <Navbar />
            <Announcement />
            <div className="accountContainer">
                <div className="accountWrapper">
                    <div className="titleContainer">
                        <h1>YOUR ACCOUNT</h1>
                        <h2>Hi {currentUser.firstname} {currentUser.lastname}</h2>
                    </div>
                    <div className="accountItems">
                        <div className="item" onClick={() => navigate('/orders')} >
                            <img src="/img/logos/accountlogo.png" alt="" />
                            <div className="itemDesc">
                                <h2>Your Orders</h2>
                                <h3>Track, Return, Buy Things again</h3>
                            </div>
                        </div>
                        <div className="item" onClick={() => setOpen(!open)} >
                            <img src="/img/logos/loginlogo.png" alt="" />
                            <div className="itemDesc">
                                <h2>Login & Security</h2>
                                <h3>Edit name, password, email, mobile</h3>
                            </div>
                        </div>
                        <div className="item" onClick={() => navigate('/wishlist')} >
                            <img src="/img/logos/wishlist.png" alt="" />
                            <div className="itemDesc">
                                <h2>Wishlist</h2>
                                <h3>All the items yet to Buy</h3>
                            </div>
                        </div>
                        <div className="item" onClick={() => navigate('/cart')} >
                            <img src="/img/logos/cart.png" alt="" />
                            <div className="itemDesc">
                                <h2>Cart</h2>
                                <h3>Items in your Cart</h3>
                            </div>
                        </div>
                        <div className="item" onClick={() => setAddOpen(!addOpen)} >
                            <img src="/img/logos/location.png" alt="" />
                            <div className="itemDesc">
                                <h2>Address</h2>
                                <h3>Change your address</h3>
                            </div>
                        </div>
                        <div className="item" onClick={() => setContactOpen(!contactOpen)} >
                            <img src="/img/logos/contact.png" alt="" />
                            <div className="itemDesc">
                                <h2>Contact Us</h2>
                            </div>
                        </div>

                    </div>
                    <div className="buttonContainer">
                        <button onClick={handleLogout}>LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account