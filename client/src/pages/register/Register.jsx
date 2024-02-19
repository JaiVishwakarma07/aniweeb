import React, { useState } from 'react'
import './register.scss'
import { useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        address: "",
        phone: 0,
    })


    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        try {
            await newRequest.post("/auth/register", user)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="register">
            <div className="registerWrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name='firstname' onChange={handleChange} />
                    <input type="text" placeholder='Last Name' name='lastname' onChange={handleChange} />
                    {/* <input type="text" placeholder='Username' name='username' onChange={handleChange}  /> */}
                    <input type="email" placeholder='email' name='email' onChange={handleChange} />
                    <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                    <input type="password" placeholder='Confirm Password' name='' />
                    <input type="number" placeholder='Phone' name='phone' onChange={handleChange} />
                    <input type="text" placeholder="Address" name='address' onChange={handleChange} />
                    <span>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></span>
                    <button>CREATE</button>
                    {/* {error && error} */}
                </form>
            </div>
        </div>
    )
}

export default Register