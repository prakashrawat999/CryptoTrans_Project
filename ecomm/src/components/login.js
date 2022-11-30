import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react'
import Navigationbar from './Navigationbar';
import Footermain from './Footermain'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Login1() {
    const navigation=useNavigate()
    const email = useRef(null)
    const password = useRef(null)
    const handlereset=()=>{
        email.current.value=''
        password.current.value=''
    }
    const formsubmit=async(e)=>{

    e.preventDefault();

    const log={
        email:email.current.value,
        password:password.current.value
    }

    const response=await axios.post('http://localhost:4001/login',log)
    if(response.data==''){
        window.alert("Login failed")
        handlereset()
        navigation('/')
    }
    else{
        Cookies.set("Islogin",true)
        Cookies.set("Name",response.data.name)
        Cookies.set("Email",response.data.email)
        Cookies.set("Phone",response.data.phone)
        window.alert("Login successful!")
        handlereset()
        navigation('/')
    }
}
  return (
    <>
    <Navigationbar/>
    <div className='flex justify-center items-center'> 
    <div className='rounded-lg bg-black w-auto text-white mt-32 mb-32 px-24 py-8'>
            <h1 className='text-center mb-10'>Login</h1>
            <Form onSubmit={formsubmit}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={email} required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password} required/>
            </Form.Group>
            <div className='flex justify-center my-10'>
            <Button className="px-4 py-1" variant="primary" type="submit">
                Login
            </Button>
            </div>
            <Link to='/forget' className='text-white'><p className='text-center'>Forgot password?</p></Link>
            </Form>
    </div>
    </div>
    <Footermain/>
    </>
  );
}

