import React from 'react'
import Card from 'react-bootstrap/Card';
import cross from '../assets/cross2.png';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
export default function Failure() {
    const date = new Date();
    const val=date.toLocaleString();

  return (
    <>
    <Navigationbar/>
    <div className='flex justify-center items-center p-10 m-10'>
    <Card className='py-10 bg-black text-center' style={{ width: '28rem'}}>
    <p className='self-center font-bold text-2xl text-red-500 '>Transaction Failed!</p>
      <img className='h-32 w-32 my-2 self-center' variant="top" src={cross} />
      <Card.Body>
        <Card.Text className=' text-sm text-red-500'>
         The transaction could not be completed on {val} with details as follows:
        </Card.Text>
      </Card.Body>
      <div className='flex items-center justify-center mt-3 mb-4'>
        <div className='text-left'>
            <p className='bg-black text-white text-sm'>Amount : </p>
            <p className='bg-black text-white text-sm'>From A/c : </p>
            <p className='bg-black text-white text-sm'>To A/c : </p>
        </div>
        <div  className='text-left ml-8'>
            <p className='bg-black text-white text-sm'>{Cookies.get().Amount} </p>
            <p className='bg-black text-white text-sm'>{Cookies.get().From} </p>
            <p className='bg-black text-white text-sm'>{Cookies.get().To} </p>
        </div>
      </div>
      <Card.Text className='text-white text-sm mt-6'>
        Please check your details or try again in sometime! 😐
        </Card.Text>
        <Link to='/contactus' className='text-white'>
      <Card.Text className='text-white text-sm '>
        Have any query?  Feel free to contact us! 
        </Card.Text>
        </Link>
    </Card>
    </div>
    <Footermain/>
    </>
  )
}