import React from 'react'
import './newsletter.scss'
import { Send } from '@material-ui/icons'

const NewsLetter = () => {
    return (
        <div className="newsLetter">
            <h1 className="title">Newsletter</h1>
            <h2 className="desc">Get timely updates from your favorite products.</h2>
            <div className="inputContainer">
                <input type="text" placeholder='Your Email' />
                <button> <Send /> </button>
            </div>
        </div>
    )
}

export default NewsLetter