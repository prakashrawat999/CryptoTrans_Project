import React from 'react'
import Cookies from 'js-cookie'
import Card from 'react-bootstrap/Card';
import tick2 from '../assets/tick2.png';
import Navigationbar from './Navigationbar'
import Footermain from './Footermain'
import { Link } from 'react-router-dom';
export default function Successful() {
    const date = new Date();
    const val=date.toLocaleString();
  return (
    <>
    <Navigationbar/>
    <div className='flex justify-center items-center p-10 m-10'>
    <Card className='py-10 bg-black text-center' style={{ width: '28rem'}}>
    <p className='self-center font-bold text-2xl text-green-500'>Transaction Successful!</p>
      <Card.Img className='h-38  self-center' variant="top" src={tick2} />
      <Card.Body>
        <Card.Text className='text-white text-sm'>
         The transaction is succesfully completed on {val} with details as follows:
        </Card.Text>
        <Card.Text className='text-green-300 text-sm'>
        Transaction ID: {Cookies.get().Transhash}
        </Card.Text>
      </Card.Body>
      <div className='flex items-center justify-center mt-3 mb-4'>
        <div className='text-left'>
            <p className='bg-black text-white text-sm'>Amount : </p>
            <p className='bg-black text-white text-sm'>From A/c : </p>
            <p className='bg-black text-white text-sm'>To A/c : </p>
        </div>
        <div  className='text-left ml-8'>
            <p className='bg-black text-white text-sm'>{Cookies.get().Amount}</p>
            <p className='bg-black text-white text-sm'>{Cookies.get().From} </p>
            <p className='bg-black text-white text-sm'>{Cookies.get().To}  </p>
        </div>
      </div>
      <Link to='/contactus' className='text-white'>
      <Card.Text className='text-white text-sm mt-6'>
        Have any query?  Feel free to contact us! 😀
      </Card.Text>
      </Link>
    </Card>
    </div>
    <Footermain/>
    </>
  )
}
