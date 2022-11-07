import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import Navbar from './Navbar';

const Product = () => {

    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    // we need to store dispatch in a variable
    const dispatch = useDispatch();

    const handleCart = (product) => {
        if(cartBtn === "Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        Rs. {product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button onClick={()=> handleCart(product)} className='btn btn-outline-dark px-4 py-2'>
                        <i className='fa fa-plus me-1'></i> {cartBtn}
                    </button>
                    <NavLink to='/Cart' className='btn btn-dark ms-2 px-3 py-2' type='submit'>
                        <i className='fa fa-shopping-cart me-1'></i> Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <>
        <Navbar />
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product