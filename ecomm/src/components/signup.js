import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
import {Link} from 'react-router-dom';
export default function Signup1() {

    const name = useRef(null)
    const phone = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const date= new Date()

    const handlereset = () => {
      name.current.value = ''
      password.current.value = ''
      phone.current.value = ''
      email.current.value=''
    }
    const formsubmit=async(e)=>{

    e.preventDefault();

    const log={
        email:email.current.value,
        password:password.current.value,
        phone:phone.current.value,
        name:name.current.value,
        stamp: date.toLocaleString()
    }

    const response=await axios.post('http://localhost:4001/signup',log)
    if (response.data.acknowledged === true) {
        window.alert("Registration succesful!")
        handlereset()
      }
      else {
        window.alert("Email already registered!")
        handlereset()
      }
}
  return (
    <>   
    <Navigationbar/>
    <div className='flex justify-center items-center mt-24 mb-32'>
     <div className=' bg-black w-auto rounded-lg text-white p-24 py-10'>
            
            <h1 className='mb-8 text-center'>Signup</h1>
            <Form onSubmit={formsubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" ref={name} required/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Phone Number" ref={phone} required/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
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

            <div className='flex justify-center'>
            <Button className='px-3 py-1 my-8' variant="primary" type="submit">
                SignUp
            </Button>
            </div>
           

            </Form>
    </div>
    </div>
    <Footermain/>
    </>
  );
}

