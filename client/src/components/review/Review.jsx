import React from 'react'
import './review.scss'

const Review = () => {
    return (
        <div className="review">
            <div className="user">
                <img className="pp" src="/img/logos/noavatar.jpg" alt="" />
                <div className="info">
                    <span>Jai</span>
                    <div className="country">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/800px-Flag_of_India.png" alt="" />
                        <span>India</span>
                    </div>
                </div>
            </div>
            <div className="stars">
                <img src="/img/logos/star.png" alt="" />
                <img src="/img/logos/star.png" alt="" />
                <img src="/img/logos/star.png" alt="" />
                <img src="/img/logos/star.png" alt="" />
                <span>4</span>
            </div>
            <p>
                Very nice Product
            </p>
            <div className="helpful">
                <span>Helful?</span>
                <img src="/img/logos/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/logos/dislike.png" alt="" />
                <span>No</span>
            </div>
        </div>
    )
}

export default Review