import React, { useContext } from 'react'
import { TransContext } from '../contextAPI/TransContext';
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'

const Navbar = () => {
    const { checkMetaAccountConnected, MetaAccount } = useContext(TransContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ms-4">
                    <NavLink className="navbar-brand fs-bold fs-3" to="/">CrypTRADE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='navbar-nav'>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/contactus">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>
                        </ul>
                        <div className='buttons'>
                        &nbsp;&nbsp;&nbsp;
                            {!MetaAccount && (
                                <button
                                    className="btn btn-outline-dark "
                                    type='submit'
                                    onClick={checkMetaAccountConnected}
                                >
                                    Metamask 🔴
                                </button>
                            ) || (
                                <button
                                    className="btn btn-outline-dark "
                                >
                                Connected 🟢
                                </button> )}
                            <CartBtn />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar