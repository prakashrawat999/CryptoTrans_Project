
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Cookies from 'js-cookie'
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
export default function Reset() {
  const password=useRef(null)
  const date= new Date()
  const email= Cookies.get().forgetmail
  const resetpass=async(e)=>{
    e.preventDefault()
    const data={
      password:password.current.value,
      stamp: date.toLocaleString()
  }
  const response=await axios.put(`http://localhost:4001/reset/${email}`,data)
         if(response.data.done==="yes"){
        Cookies.remove('forgetmail')
        window.alert("Password reset successfuly!")
    }
    else{
        Cookies.remove('forgetmail')
        window.alert("password cannot be reset")
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
