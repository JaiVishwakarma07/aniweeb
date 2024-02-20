import React, { useState } from 'react'
import './slider.scss'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems } from "../../../data"
import { useNavigate } from 'react-router-dom'

const Slider = () => {
    const navigate = useNavigate()
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className="slider">
            <div className="arrow" style={{ left: "10px" }} onClick={() => handleClick("left")} >
                <ArrowLeftOutlined />
            </div>
            <div className="wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }} >
                {sliderItems.map((item) => (
                    <div className="slide" style={{ backgroundColor: `#${item.bg}` }} key={item.id} >
                        <div className="circle" style={{ marginLeft: '100px', backgroundColor: `#${item.circleBg}` }}></div>
                        <div className="imgContainer">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="infoContainer">
                            <h1 className="title">{item.title}</h1>
                            <h1 className="desc">{item.desc}</h1>
                            <button onClick={() => navigate(`/products`)} >SHOW NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrow" style={{ right: "10px" }} onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

export default Slider