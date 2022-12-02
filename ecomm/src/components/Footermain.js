import React from "react";
import { Link } from "react-router-dom";
import '../style/home.css'
export default function Footermain() {
        return (
                <div className="flex flex-col items-between justify-center footerBg pt-12 pb-4 px-10 h-48 mt-28">
                        <div className="flex items-center justify-between footer2">
                                <div className="text-white flex-col flex justify-center items-center">
                                        <Link to='/about' className="no-underline text-white">  <p className="text-sm text-white">About Us</p>  </Link>
                                        <Link to='/contact' className="no-underline text-white"><p className="text-sm text-white">Contact us</p> </Link>
                                        <Link to="/feedback" className="no-underline text-white">  <p className="text-sm text-white">Feedback</p> </Link>
                                </div>
                                <div className="text-white flex-col flex justify-center items-center">
                                        <Link to="/tandc" className="no-underline text-white">
                                                <p className="text-sm text-white">Terms & Conditions</p>
                                        </Link>
                                        <Link to="/privacypolicy" className="no-underline text-white">
                                                <p className="text-sm text-white">Privacy Policy</p>
                                        </Link>
                                        <Link to="/recent" className="no-underline text-white">
                                                <p className="text-sm text-white">Recent Transactions</p>
                                        </Link>
                                </div>
                                <div className="text-white flex-col flex justify-center items-center">
                                        <Link to='/products' className="no-underline text-white"><p className="text-sm text-white">Store</p> </Link>
                                        <p className="text-sm text-white">Crypto News</p>
                                        <Link to='/crypto' className="no-underline text-white"> <p className="text-sm text-white">Prices</p> </Link>
                                </div>
                                <div className="text-white flex-col flex justify-center items-center">
                                        <a className=" text-white transition-colors my-2 duration-300 hover:text-deep-purple-accent-400"
                                        href="https://twitter.com/CrptoTransacti1">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5"><path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" /></svg>
                                        </a>
                                        <a className=" text-white my-2 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                        href="https://www.linkedin.com/in/crypto-transaction-b03290259/">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5"><path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" /></svg>
                                        </a>
                                        <a className=" text-white my-2 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                        href="https://www.instagram.com/crypt_transaction/">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" ></path></svg>
                                        </a>
                                </div>
                        </div>
                        <p className="text-center text-sm font-thin mt-2  text-white">Copyright © 2022</p>
                </div>
        )
}
