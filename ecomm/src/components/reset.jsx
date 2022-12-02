
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
export default function Reset() {
  const navigation=useNavigate()
  const password=useRef(null)
  const email=useRef(null)
  const date= new Date()
  const resetpass=async(e)=>{
    e.preventDefault()
    const data={
      password:password.current.value,
      stamp: date.toLocaleString()
  }
  const response=await axios.put(`http://localhost:4001/reset/${email.current.value}`,data)
         if(response.data.done==="yes"){
        window.alert("Password reset successfuly!")
        navigation('/login')
    }
    else{
        window.alert("Email not registered!")
        email.current.value=''
        password.current.value=''
    }
  }
  return (
   <>
   <Navigationbar/>
    <div className='flex justify-center items-center mt-24 mb-32'>
     <div className=' bg-black w-auto rounded-lg text-white px-20 py-6'>
            
            <p className='mb-8 text-3xl text-center'>Reset your password!</p>
            <Form onSubmit={resetpass} >
              <Form.Group className=" mt-6" controlId="formBasicEmail">
                <Form.Label>Enter your registered email!</Form.Label>
                <Form.Control type="email" placeholder="email" ref={email}  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter your new Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password}  required/>
            </Form.Group>

            <div className='flex justify-center'>
            <Button className='px-3 py-1 my-8' variant="primary" type="submit">
                Submit
            </Button>
            </div>

            </Form>
    </div>
    </div>
    <Footermain/>
   </>
  )
}