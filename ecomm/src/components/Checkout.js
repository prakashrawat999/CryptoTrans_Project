import { useSelector } from 'react-redux'
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import Footer from './Footer'
import Scrollbars from 'react-custom-scrollbars-2';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { TransContext } from '../contextAPI/TransContext';
import Cookies from 'js-cookie';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    min="0"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
);


const Checkout = () => {

  const { checkMetaAccountConnected, MetaAccount, transForm, send, handleFormData } = useContext(TransContext);
  const navigation = useNavigate()

  const state = useSelector((state) => state.addItem)



  const handleSubmit = async (e) => {
    Cookies.set("Status", false)
    Cookies.remove("Transhash")
    Cookies.remove("To")
    Cookies.remove("From")
    Cookies.remove("Amount")
    const { addressTo, amount, keyword, message } = transForm;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) { window.alert("fill complete details in transaction form to proceed!"); return; }
    await send();
    console.log("Submit");
    if (Cookies.get().Status === "true") {
      navigation('/success')
    }
    else {
      navigation('/failure')
    }
  }



  var total = 0, gas = 0.00026, basefee = 0.000000257, addition;
  const itemList = (item) => {
    addition = gas + basefee;
    const actualprice = item.price * 0.0000097;
    total = total + actualprice - addition;

    return (
      <li className='list-group-item d-flex justify-content-between lh-sm'>
        <div>
          <h6 className='my-0'>{item.title.substring(0, 70)}</h6>
        </div>
        <span class="badge bg-primary rounded-pill">Rs. {item.price}</span>
      </li>
    )
  }
  return (
    <>
      <Navbar />
      <div>
        <div class="container">
          <h1 class="h3 mb-5">Payment</h1>
          <div class="row">

            <div class="col-lg-8">
              <Scrollbars style={{ width: 750, height: 370 }}>
                <ul className='list-group m-4'>
                  {state.map(itemList)}
                </ul>
              </Scrollbars>
            </div>

            <div class="col-lg-4">
              <div class="card position-sticky top-0">
                <div class="p-3 bg-light bg-opacity-10">
                  <h6 class="card-title mb-3">Payment Details</h6>
                  <div class="d-flex justify-content-between mb-1 small">
                    <span>Gas Fee</span> <span>{gas}</span>
                  </div>
                  <div class="d-flex justify-content-between mb-1 small">
                    <span>Base Fee</span> <span>{basefee}</span>
                  </div>
                  <div class="d-flex justify-content-between mb-1 small">
                    <span>Coupon (Code: CRYPTO80)</span> <span class="text-danger">-0.0001</span>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between mb-3 small">
                    <span>TOTAL</span> <strong class="text-dark">Gwe {total}</strong>
                  </div>
                  <div class="form-check small">
                    <label class="form-check-label" for="tnc">
                      ✔️  I agree to the <a href="#">
                        <Link to="/tandc" className="no-underline">
                          Terms & Conditions
                        </Link>
                      </a>
                    </label>
                  </div>
                  <div class="form-check mb-1 small">
                    <label class="form-check-label">
                      ✔️  Copy Address & Paste Below in Address Column <br />
                      (This is done to promote Transparency) <a href="#">0x09D6845e66798e840A6f013f65fcD85aB7196b58</a>
                    </label>
                  </div>
                  {!MetaAccount && (
                    <>
                      <button
                        class="btn btn-outline-dark w-100 mt-3 mb-3"
                        type='button'
                        onClick={checkMetaAccountConnected}
                      >
                        Connect MetaMask 🤘
                      </button>
                    </>
                  ) || (
                      <>
                        <div className=" px-4">
                          <div className='text-white text-x rounded-xl'>
                            <br></br>
                            <Input
                              placeholder="Address" name="addressTo" type="text" handleChange={handleFormData} required />
                            <br></br>
                            <br></br>
                            <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={handleFormData} value={total} required />
                            <br></br>
                            <br></br>
                            <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleFormData} required />
                            <br></br>
                            <br></br>
                            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleFormData} required />
                            <br></br>
                            <br></br>

                            {
                              false ? (
                                <div class="spinner-border text-danger"></div>
                              ) : (
                                <button
                                  className='btn btn-outline-success w-100 mt-2 mb-3'
                                  type='button'
                                  onClick={handleSubmit}
                                >
                                  Confirm Payment 🟢
                                </button>
                              )
                            }
                          </div>
                        </div>
                      </>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout