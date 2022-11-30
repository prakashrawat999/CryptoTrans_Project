import React from 'react'
import Cookies from 'js-cookie';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
export default function Profile() {
  return (
    <>
    <Navigationbar/>
    <h1 className='text-5xl font-bold my-16'>Profile</h1>
        <div className='flex justify-center items-center space-x-20 text-3xl font-bold bg-purple-200 '>
        <div className='flex flex-col items-start ml-64'>
        <p>Name: </p>
        <p>Email:</p>
        <p>Contact: </p>
        </div>
        <div className='flex flex-col items-start'>
        <p>{Cookies.get().Name}</p>
        <p>{Cookies.get().Email}</p>
        <p>{Cookies.get().Phone}</p>
        </div>
        </div>
    <Footermain/>
    </>
  )
}
