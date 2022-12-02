import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
import { useState } from 'react';
export default function Recent() {
  const [address, setAddress] = useState("")
  const link = `https://goerli.etherscan.io/address/${address}`
  return (
    <>
      <Navigationbar />
      <div className='flex  items-center justify-center m-36 '>
        <Card className='bg-black text-white'>
          <Card.Header className='text-center bg-black text-white'>Recent Transactions History</Card.Header>
          <Card.Body>
            <Card.Title>For browsing recent transaction history</Card.Title>
            <Card.Text>
              Enter your metamask account Address!
            </Card.Text>
            <div className='flex flex-col items-center space-y-5'>
              <input type="text" className='px-2 rounded-sm' onChange={(e) => { setAddress(e.target.value) }} value={address} required />
              <a href={link} className='hover:bg-blue-500 cursor-pointer'><Button variant="primary">Check!</Button> </a>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footermain />
    </>
  )
}
