import React from 'react'
import "../style/cardprofile.css"
import Cookies from 'js-cookie'
import Navigationbar from './Navigationbar'
import Footermain from './Footermain'
import { Link } from 'react-router-dom'
export default function Profile() {
  return (
    <>
    <Navigationbar/>
    <div className='flex justify-center items-center mt-28  mb-32'>
    <div className="procard">
        <h2 className='text-blue-200 mb-10'>👨 My Profile</h2>
        <div className='flex justify-center items-center'>
        <div className='flex flex-col items-start mr-10 '>
        <p>Name: </p>
        <p>Email:</p>
        <p>Phone: </p>
        </div>
        <div className='flex flex-col items-start'>
        <p>{Cookies.get().Name}</p>
        <p>{Cookies.get().Email}</p>
        <p>{Cookies.get().Phone}</p>
        </div>
        </div>
    </div>
    </div>
    <Footermain/>
    </>
  )
}
