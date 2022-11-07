import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);


    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        );
    };


    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>

                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All Products 🏷️ </button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Mens 🧔 </button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Womens 👩 </button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics 📴 </button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className='col-md-3 mb-4'>
                                    <div class="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                            <p class="card-text lead fw-bold">Rs. {product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className='btn btn-dark ms-2 px-3 py-2'>
                                                Buy now
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        );
    };

    return (
        <>
            <Navbar />
            <div className="card bg-dark text-white border-0">
                <img src="https://i.pinimg.com/originals/0f/f7/78/0ff7784184af761d38db3013a4d1584e.gif" className="card-img" alt="Background" height="420px"
                    style={{
                        opacity: 0.2,
                        backgroundSize: "cover",
                    }}
                />
                <div className="card-img-overlay my-5">
                    <div className='container'>
                        <h5 className="card-title display-2 fw-bolder mb-0">BlockChain Transaction Store</h5>
                        <p className="card-text display-6">This is a wider card with supporting web3.0 transaction system.</p>
                        <p className="card-text display-6"><small>Web 3.0 Technology connect with Metamask</small></p>
                    </div>
                </div>
            </div>
            <div>
                <div className='container my-3 py-5'>
                    <div className='row'>
                        <div className='col-12 mb-5'>
                            <h1 className='display-6 fw-bolder text-center'>Latest Products 😄 100% Discount </h1>
                            <hr />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products