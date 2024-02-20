import React, { useState } from 'react'
import './singleproduct.scss'
import { Add, Favorite, Remove, Star } from '@material-ui/icons'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import Reviews from '../../components/reviews/Reviews'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {

    const { id } = useParams()
    const { isLoading, error, data } = useQuery({
        queryKey: ['product'],
        queryFn: () => newRequest.get(`/product/single/${id}`).then((res) => {
            return res.data
        })
    })
    // console.log(data)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

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

    const handleClick = (product, quantity) => {
        dispatch(addProduct({ product, quantity }))
        notifySuccess()
    }

    return (
        <div className="singleproduct">
            <Navbar />
            <Announcement />

            {isLoading ? "Loading" : <div className="productWrapper">
                <div className="path">
                    <h1 className="pathInfo">HOME / T-SHIRTS / {data.title} </h1>
                </div>
                <div className="productWrapper2">
                    <div className="productWrapper3">
                        <div className="imageContainer">
                            <img src={`/upload/${data.img}`} alt="" />
                        </div>
                        <div className="productInfoContainer">
                            <h1 className="infoTitle">{data.desc}</h1>
                            <div className="ratings">
                                <span className="rate">4.3</span>
                                <Star color='secondary' fontSize='small' />
                                <span className="lineSeparator">|</span>
                                <h3> 6.9K Ratings</h3>
                            </div>
                            <hr />
                            <span className="price">₹{data.price}</span>
                            <div className="productFilterContainer">
                                <div className="productFilter">
                                    <div className="productFilterTitle">Color</div>
                                    <div className="filterColor" style={{ backgroundColor: "lightgreen" }} ></div>
                                    <div className="filterColor" style={{ backgroundColor: "black" }} ></div>
                                    <div className="filterColor" style={{ backgroundColor: "gray" }} ></div>
                                </div>
                                <div className="productFilter">
                                    <h1 className="productFilterTitle">Size</h1>
                                    <select name="" id="" className="filterSize">
                                        <option value="">XS</option>
                                        <option value="">S</option>
                                        <option value="">M</option>
                                        <option value="">L</option>
                                        <option value="">XL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="addContainer">
                                <div className="productAmountContainer">
                                    <Remove onClick={() => handleQuantity("dec")} />
                                    <span className="productAmount">{quantity}</span>
                                    <Add onClick={() => handleQuantity("inc")} />
                                </div>
                                <button className='addToCart' style={{ backgroundColor: "#D82F5A", color: "white" }} >WISHLIST</button>
                                <button className='addToCart' onClick={() => handleClick(data, quantity)} >ADD TO CART</button>
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
                                />
                            </div>
                            <hr />
                            <p className="desc">
                                100% Original Products <br />
                                Pay on delivery might be available <br />
                                Easy 14 days returns and exchanges <br />
                                Try & Buy might be available
                            </p>
                            <hr />
                            <div className="description">
                                <h1 className="productDescTitle">PRODUCT DETAILS</h1>

                                <span className='descSub' > Unisex Oversized Anime Printed T-Shirt </span>
                                <h3 className="descItem"> <span>Material Composition</span> 100% Cotton </h3>
                                <h3 className="descItem"> <span>Pattern</span> Solid </h3>
                                <h3 className="descItem"> <span>Fit Type</span> Oversized </h3>
                                <h3 className="descItem"> <span>Country Origin</span> India </h3>

                            </div>

                            <hr />

                            <div className="aboutItem">
                                <h1 className="aboutItemTitle">ABOUT THIS ITEM</h1>
                                <ul>
                                    <li>FIT TYPE: Oversized Fit; Main material: 100% Cotton , 180GSM (Bio-Washed & Pre-Shrunk for Minimum shrinkage).</li>
                                    <li>HIGH DEFINITION PRINT: We are using the High Quality Print Technology to ensure our products with sharp cuts and durable for long time.</li>
                                    <li>WASH CARE: Machine Wash Cold, Tumble dry low, Do Not Bleach. Check our size chart to get your best fit.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr className='reviewPartition' />
                    <h1 style={{ fontSize: "25px", marginTop: "30px" }} >CUSTOMER RATINGS & REVIEWS</h1>
                    <div className="reviews">
                        <h3 className="ratingHeader"> <span>4.2</span>  <Star color='secondary' fontSize='large' /> Ratings from 6.9K verified Customers </h3>
                        <div className="reviewContainer">
                            <Reviews />
                        </div>
                    </div>
                </div>
            </div>}


            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Product