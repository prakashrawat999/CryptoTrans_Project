import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    const state = useSelector((state) => state.addItem);
    return (
        <>
            <NavLink to='/Cart' className="btn btn-outline-dark ms-2 mx-4" type="submit">
                <i className='fa fa-shopping-cart me-1'> Cart ({state.length})</i>
            </NavLink>
        </>
    )
}

export default CartBtn