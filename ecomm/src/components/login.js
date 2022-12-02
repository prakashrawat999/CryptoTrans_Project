import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react'
import Navigationbar from './Navigationbar';
import Footermain from './Footermain'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import validator from 'validator'
import { BsEyeFill } from "react-icons/bs";

export default function Login1() {
    //IMPORTANT: ENTER EMAIL CHAR BY CHAR FOR VALIDATOR TO WORK ELSE IT WILL NOT VALIDATE 
    //SO DONT DIRECTLY COPY PASTE EMAIL....
    const navigation=useNavigate()
    const [email,setEmail]=useState("")
    var [HasemailError,setHasEmailError]=useState(false);
    const password = useRef(null)
    const[passwordShown,setPasswordShown]=useState(false);
 const Passwordvisibility = () => {
  setPasswordShown(!passwordShown);
};
    const handlereset=()=>{
        setEmail("")
        password.current.value=''
    }
    const CheckEmail = (e) => {
        setEmail(e.target.value)
        if (validator.isEmail(email)) {
          setHasEmailError(false)
        } else {
          setHasEmailError(true)
        }
      }
    const formsubmit=async(e)=>{
    e.preventDefault();
    if(HasemailError===false){
    const log={
        email:email,
        password:password.current.value
    }

    const response=await axios.post('http://localhost:4001/login',log)
    if(response.data==''){
        window.alert("Login failed")
        handlereset()
        navigation('/login')
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
else{
    window.alert("Enter correct details")
}
}
  return (
    <>
    <Navigationbar/>
    <div className='flex justify-center items-center'> 
    <div className='rounded-lg bg-black w-auto text-white mt-32 mb-32 px-28 py-8'>
            <h1 className='text-center mb-10'>Login</h1>
            <Form validated={true} onSubmit={formsubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className='prevent-validation' type="email" placeholder="Enter email" onChange={(e)=>CheckEmail(e)} value={email} required />
              <Form.Text className="text-muted">
              {(HasemailError === true) ? <p className='text-red-700'>Enter a valid email</p> : <p className="">Valid Email</p>}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='flex items-center space-x-4'>
              <Form.Control type={passwordShown ? "text" : "password"}  ref={password} placeholder="Password" required />
              <BsEyeFill onClick={()=>Passwordvisibility()} className='text-2xl cursor-pointer'/>
              </div>
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

