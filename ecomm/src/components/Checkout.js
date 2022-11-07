import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar';
import Footer from './Footer'

const Checkout = () => {
  const state = useSelector((state) => state.addItem)

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return(
      <li className='list-group-item d-flex justify-content-between lh-sm'>
        <div>
          <h6 className='my-0'>{item.title}</h6>
        </div>
        <span className='text-muted'>Rs. {item.price}</span>
      </li>
    )
  }
  return (
    <>
    <Navbar />
    <div>
      Checkout Cart Product
      <ul className='list-group mb-3'>
      {state.map(itemList)}
      <li className='list-group-item d-flex justify-content-between'>
      <span>Total Amount</span>
      <strong>Rs. {total}</strong>
      </li>
      </ul>
    </div>
    <Footer />
    </>
  )
}

export default Checkout