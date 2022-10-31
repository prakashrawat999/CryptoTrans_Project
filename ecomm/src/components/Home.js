import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <>
            <div className="card bg-dark text-white border-0">
                <img src="https://knowtechie.com/wp-content/uploads/2019/04/bitcoin-blockchain-global.jpg" className="card-img" alt="Background" height="500px"
                    style={{
                        opacity: 0.1,
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
            <Products />
        </>
    )
}


export default Home