import React, { useRef } from 'react'
import axios from 'axios'
import contactimg1 from '../assets/contactimg1.png'
import { FcDepartment } from "react-icons/fc";
import { AiTwotoneMail } from "react-icons/ai";
import { FcCallback } from "react-icons/fc";
import '@coreui/coreui/dist/css/coreui.min.css'
import { CFormInput } from '@coreui/react';
import { CFormFloating } from '@coreui/react';
import { CFormLabel } from '@coreui/react';
import { FiTwitter } from "react-icons/fi";
import "../style/contactstyle.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Contactus() {
  var date = new Date()
  const name = useRef()
  const email = useRef()
  const phone = useRef()
  const message = useRef()
  const handlereset = () => {
    name.current.value = ''
    email.current.value = ''
    phone.current.value = ''
    message.current.value = ''
  }
  const submit = async (e) => {
    e.preventDefault()
    let detail = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value,
      stamp: date.toLocaleString()
    }
    const response = await axios.post('http://localhost:4001/contact', detail)
    if (response.data.acknowledged === true) {
      window.alert("Submitted!")
      handlereset()
    }
    else {
      window.alert("Error in submitting form")
      handlereset()
    }
  }
  return (
      <div className='mb-10'>
        <div className='flex flex-col justify-center items-center bg-gray-100 mb-5 '>
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
            <div className='space-y-3 m-7'>
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
          <form validated={true} onSubmit={submit} className=' cbox rounded flex-col px-12 py-3 space-y-3 justify-center items-center flex  my-10 bg-gray-50'>

            <CFormFloating>
              <CFormInput type="text" style={{ width: '280px', height: '70px' }} ref={name} id="floatingInput" placeholder="name" />
              <CFormLabel htmlFor="floatingInput">Name</CFormLabel>
            </CFormFloating>
            <CFormFloating>
              <CFormInput type="email" style={{ width: '280px', height: '70px' }} ref={email} id="floatingInput" placeholder="email" />
              <CFormLabel htmlFor="floatingInput">Email</CFormLabel>
            </CFormFloating>
            <CFormFloating>
              <CFormInput type="text" style={{ width: '280px', height: '70px' }} ref={phone} id="floatingInput" placeholder="contact" />
              <CFormLabel htmlFor="floatingInput">Contact No</CFormLabel>
            </CFormFloating>
            <CFormFloating>
              <CFormInput type="textarea" style={{ width: '280px', height: '130px' }} ref={message} id="floatingInput" placeholder="message" />
              <CFormLabel htmlFor="floatingInput">Your Query?</CFormLabel>
            </CFormFloating>
            <div className=''>
              <button className='  mt-3 bg-red-700 px-3 py-1 hover:bg-red-500 text-white rounded '>Send message</button>
            </div>
          </form>
        </div>
      </div>
  )
}
