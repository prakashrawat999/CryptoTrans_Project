import Cookies from 'js-cookie'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
export default function Forget() {
  const email=useRef(null)
  const date=new Date();
  const Forgetpass=async(e)=>{
    e.preventDefault()
    const data={
      email:email.current.value,
      stamp:date.toLocaleString()
    }
    const response= await axios.post('http://localhost:4001/forget',data)
    if(response.data.done==='yes'){
      Cookies.set('forgetmail',email.current.value)
      window.alert("Password reset mail sent successfully!")
    }
    else{
      window.alert("email not registered!")
    }
  }
  return (
   <>
   <Navigationbar/>
    <div className='flex justify-center items-center mt-24 mb-32'>
     <div className=' bg-black w-auto rounded-lg text-white px-20 py-6'>
            <p className='text-white text-2xl'>You will recieve a password reset link on your email!</p>
            <Form onSubmit={Forgetpass}>
            <Form.Group className=" mt-6" controlId="formBasicEmail">
                <Form.Label>Enter your registered email!</Form.Label>
                <Form.Control type="email" placeholder="email" ref={email}  required/>
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