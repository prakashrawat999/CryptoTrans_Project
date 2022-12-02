import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoPerson } from "react-icons/go";
import logo from '../assets/logo.webp'
import '../style/home.css'
import Cookies from 'js-cookie';
export default function Navigationbar() {
    const navigation = useNavigate()
    const logout = () => {
        Cookies.remove("Name")
        Cookies.remove("Email")
        Cookies.remove("Phone")
        Cookies.set("Islogin", false)
        navigation('/')
    }
    return (
        <>
            <div className='flex items-center justify-between h-14 navBg '>
                <div className='flex items-center space-x-2 ml-1'>
                    <Link to='/' className='no-underline'> <img src={logo} alt='img' className='w-14 h-14' /> </Link>
                    <li className='text-white font-bold text-lg font-mono list-none'>CrypTRADE</li>
                </div>
                <div className='text-white flex space-x-4 items-center'>
                    <Link to='/' className='no-underline text-white'>  <li className='list-none'>Home</li> </Link>
                    <Link to='/about' className='no-underline text-white'>  <li className='list-none'>About</li> </Link>
                    <Link to='/contactus' className='no-underline text-white'><li className='list-none'>Contact</li> </Link>
                    <Link to='/products' className="no-underline text-white"> <li className='list-none'>Store</li> </Link>
                </div>
                {Cookies.get().Islogin === "false" ? <div className='flex items-center space-x-2 mr-4'><Link to='/login' className='no-underline text-white'><button className='homeBtn py-2 px-2 w-16 text-white'>Login</button></Link>
                    <Link to='/signup' className='text-white no-underline'> <button className='homeBtn py-2 px-2 text-white'>Signup</button> </Link> </div> :<div className='flex justify-center items-center'>
                    <Link to='/profile' className='no-underline'><GoPerson className='text-lg text-pink-300'/> </Link> 
                    <p className='text-md mt-3 ml-2 mr-4 text-pink-300 font-mono'>{Cookies.get().Name}</p> <button className='homeBtn py-2 px-2 w-16 text-white mr-2' onClick={()=>logout()}>Logout</button> </div>}


            </div>
        </>
    )
}
