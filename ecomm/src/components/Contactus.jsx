import React, { useRef } from 'react'
import axios from 'axios'
import validator from 'validator'
import Form from 'react-bootstrap/Form';
import contactimg1 from '../assets/contactimg1.png'
import { FcDepartment } from "react-icons/fc";
import { AiTwotoneMail } from "react-icons/ai";
import { FcCallback } from "react-icons/fc";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CFormInput } from '@coreui/react';
import { CFormFloating } from '@coreui/react';
import { CFormLabel } from '@coreui/react';
import { FiTwitter } from "react-icons/fi";
import '../style/contactstyle.css'
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contactus() {
  const navigation= useNavigate()
  var date = new Date()
  const name = useRef()
  var [email,setEmail]= useState("")
  var [HasemailError,setHasEmailError]=useState(false);
  const CheckEmail = (e) => {
    setEmail(e.target.value)
    if (validator.isEmail(email)) {
      setHasEmailError(false)
    } else {
      setHasEmailError(true)
    }
  }
  var [subject, setSubject] = useState("")
  var [HassubError,setHasSubError] =useState(false)
  var [message,setMessage] = useState("")
  var [HasmesError, setHasMesError] = useState(false)
  const handlereset = () => {
    name.current.value = ''
    setEmail("")
    setSubject("")
    setMessage("")
  }
  const submit = async (e) => {
    e.preventDefault()
    if(HasemailError===false && HassubError===false && HasmesError===false){
    let detail = {
      name: name.current.value,
      email: email,
      subject: subject,
      message: message,
      stamp: date.toLocaleString()
    }
    const response = await axios.post('http://localhost:4001/contact', detail)
    if (response.data.acknowledged === true) {
      window.alert("Submitted!")
      handlereset()
      navigation('/')
    }
    else {
      window.alert("Error in submitting form")
      handlereset()
    }
  }
  else{
    window.alert("Enter correct details")
  }
  }
  return (
    <>
    <Navigationbar/>
    <div className='mb-10'>
      <div className='  flex flex-col justify-center items-center bg-gray-100 mb-5 '>
        <img src={contactimg1} alt="img not available" className=' w-32 h-20 my-2'></img>
        <p className=' font-bold text-3xl mb-2'>Contact Us</p>
        <p className=' font-semibold text-lg text-gray-600 '>Have A Query? Then don't worry! <p className='text-center'>We've Got you!</p> </p>
      </div>
      <div className='flex justify-center items-center'>
        <div className='cbox w-72  rounded fex flex-col px-8 py-4 bg-gray-800 text-white justify-center items-center'>
          <p className='font-bold text-xl'>
            Contact Information
          </p>
          <p className='text-gray-100'>Fill up the form and we will get back to you shortly!!</p>
          <div className='space-y-3 m-10'>
            <div>
              <FcCallback />
              <p>   9989876778</p>
            </div>
            <div>
              <AiTwotoneMail className='text-white' />
              <p>cryptrading@gmail.com</p>
            </div>
            <div>
              <FcDepartment />
              <p>New delhi</p>
            </div>
            <div>
              <FiTwitter className='text-white' />
              <p>Crypt-minor</p>
            </div>
          </div>
        </div>
        <form validated={true} onSubmit={submit} className=' cbox rounded flex-col px-12 py-4 space-y-3 justify-center items-center flex  my-10 bg-gray-50'>
          
        <CFormFloating validated={true}>
            <CFormInput type="text"  style={{ width: '280px',height:'60px' }} ref={name} id="floatingInput" placeholder="name" required />
            <CFormLabel htmlFor="floatingInput">Name</CFormLabel>
          </CFormFloating>
         <CFormFloating>
            <CFormInput type="email"  style={{ width: '280px' ,height:'60px'}}  onChange={(e)=>CheckEmail(e)} value={email} id="floatingInput" placeholder="email" required />
            <CFormLabel htmlFor="floatingInput">Email</CFormLabel>
            <Form.Text className="text-muted">
              {(HasemailError === true) ? <p className='text-red-700'>Enter a valid email</p> :""}
            </Form.Text>
          </CFormFloating>
          <CFormFloating>
            <CFormInput type="text"  style={{ width: '280px',height:'60px' }}  onChange={(e) => { setSubject(e.target.value); if (e.target.value.length < 3) { setHasSubError(true) } else { setHasSubError(false) } }} value={subject}  id="floatingInput" placeholder="Query Subject" required />
            <CFormLabel htmlFor="floatingInput">Query Subject</CFormLabel>
            <Form.Text className="text-muted">
                {(HassubError === true) ? <p className='text-red-700'>Enter a Subject greater than or equal 3</p> : " "}
              </Form.Text>
          </CFormFloating>
          <CFormFloating>
            <CFormInput type="textarea"  style={{ width: '280px', height:'100px' }} onChange={(e) => { setMessage(e.target.value); if (e.target.value.length < 20) { setHasMesError(true) } else { setHasMesError(false) } }} value={message}  id="floatingInput" placeholder="message" required />
            <CFormLabel htmlFor="floatingInput">Your Query?</CFormLabel>
            <Form.Text className="text-muted">
                {(HasmesError === true) ? <p className='text-red-700'>Enter a query greater than or equal 20 char</p> : " "}
              </Form.Text>
          </CFormFloating>
          <div className=''>
            <button className='  mt-3 bg-red-700 px-3 py-1 hover:bg-red-500 text-white rounded '>Send message</button>
          </div>
        </form>
      </div>
    </div>
    <Footermain />
    </>
  )
}
