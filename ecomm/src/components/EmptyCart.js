import React from 'react'
import '../style/empty.css'
import { NavLink } from 'react-router-dom';


const EmptyCart = () => {
    return (
        <>
            <div class="container-fluid  mt-100">
                <div class="row mt-4">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body cart">
                                <div class="col-sm-12 empty-cart-cls text-center">
                                    <img src="https://www.iconbunny.com/icons/media/catalog/product/1/0/1067.12-empty-cart-icon-iconbunny.jpg" width="130" height="130" class="img-fluid mb-4 mr-3" />
                                    <h3><strong>Your Cart is Empty</strong></h3>
                                    <h4>Add something to make me happy :)</h4>
                                    <NavLink to="/products" className="btn btn-outline-dark m-3" >Continue Shopping</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default EmptyCart