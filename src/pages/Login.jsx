import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../services/allApis'
import { toast } from 'react-toastify'

function Login() {

    const [user, setuser] = useState({
        email: "", password: ""
    })

    const nav = useNavigate()

    const handleLogin = async () => {
        console.log(user);
        const { email, password } = user
        if (!email || !password) {
            toast.warning("Enter Valid Inputs!!")
        } else {
            const result = await loginApi(email, password)
            if (result.status == 200) {
                if (result.data.length > 0) {
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData', JSON.stringify(result.data[0]))
                    toast.success("LogIn Successfull!!")
                    nav('/home')
                    setuser({
                        email: "", password: ""
                    })
                } else {
                    toast.warning("Invalid Email/Password!!")
                }
            } else {
                toast.error("Something Went Wrong!!")
            }
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className="w-75 border shadow bg-light p-5">
                    <h1>LogIn</h1>
                    <input type="email" onChange={(e) => { setuser({ ...user, email: e.target.value }) }} className='form-control mb-3' placeholder='Enter Email ID' />
                    <input type="password" onChange={(e) => { setuser({ ...user, password: e.target.value }) }} name='' id='' className='form-control mb-3' placeholder='Enter Password' />
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-info' onClick={handleLogin}>LogIn</button>
                        <Link to={'/reg'} className='text-decoration-none text-info'>New User?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login