import React, { useState } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await newRequest.post("/auth/login", { email, password }, { withCredentials: true })
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            navigate("/")
        } catch (err) {
            setError(err.respons.data)
        }
    }

    return (
        <div className="login">
            <div className="wrapper">
                <div className="title">
                    <h1>Welcome To <span>AniWeeb</span></h1>
                </div>
                <form className="form" onSubmit={handleSubmit} >
                    <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    <button type='submit' >Login</button>
                    <Link className='link'>FORGET PASSWORD?</Link>
                    <Link className='link' to="/register" >CREATE NEW ACCOUNT</Link>
                </form>
            </div>
        </div>
    )
}

export default Login