import React from 'react'
import './footer.scss'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <div className="logo">
                    <img src="/img/logos/logo.png" alt="" />
                    <h1>AniWeeb</h1>
                </div>
                <p className="desc"
                >
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className="socialContainer">
                    <div className="socialIcon" style={{ backgroundColor: "#3B5999" }} >
                        <Facebook />
                    </div>
                    <div className="socialIcon" style={{ backgroundColor: "#E4405F" }} >
                        <Instagram />
                    </div>
                    <div className="socialIcon" style={{ backgroundColor: "#55ACEE" }} >
                        <Twitter />
                    </div>
                    <div className="socialIcon" style={{ backgroundColor: "#E60023" }} >
                        <Pinterest />
                    </div>
                </div>
            </div>
            <div className="center">
                <h3 className="title">Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Men's Fashion</li>
                    <li>Women's Fashion</li>
                    <li>Accessories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="right">
                <h3 className="title">Contact</h3>
                <div className="contactItem">
                    <Room style={{ marginRight: "10px" }} /> NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka - 575 025
                </div>
                <div className="contactItem">
                    <Phone style={{ marginRight: "10px" }} /> +91 0824 247 4000


                </div>
                <div className="contactItem">
                    <MailOutline style={{ marginRight: "10px" }} /> contact@AniWeeb.in
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />

            </div>
        </div>
    )
}

export default Footer