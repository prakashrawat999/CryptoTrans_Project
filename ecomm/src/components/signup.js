import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState, useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Navigationbar from './Navigationbar';
import Footermain from './Footermain';
import { useNavigate } from 'react-router-dom'
import '../style/cardprofile.css'
import { BsEyeFill } from "react-icons/bs";
import validator from 'validator'
export default function Signup1() {
//for show password
 const[passwordShown,setPasswordShown]=useState(false);
 const Passwordvisibility = () => {
  setPasswordShown(!passwordShown);
};
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isConfirmPwd, setIsConfirmPwd] = useState(false);
  //checking if passwords match
  useEffect(() => {
    if (isConfirmPwd) { //checking field has value or not
      if (password === confirmPwd) {
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true)
      }
    }
  }, [confirmPwd])
  const handleConfirmPwd = (event) => {
    setConfirmPwd(event.target.value);
    setIsConfirmPwd(true); //determines that the field has a value
  }
  var [Phone, setPhone] = useState("");
  var [HasError, setHasError] = useState(false);
  var [password, setPassword] = useState("");
  var [HaspassError, setHasPassError] = useState(false);
  var [name, setName] = useState("");
  var [HasnameError, setHasNameError] = useState(false);
  var [email,setEmail]= useState("");
  var [HasemailError,setHasEmailError]=useState(false);
  const navigation = useNavigate()
  const date = new Date()
  const CheckEmail = (e) => {
    setEmail(e.target.value)
    if (validator.isEmail(email)) {
      setHasEmailError(false)
    } else {
      setHasEmailError(true)
    }
  }
  const handlereset = () => {
    setName("")
    setPassword("")
    setPhone("")
    setConfirmPwd("")
    setEmail("")
  }
  const formsubmit = async (e) => {

    e.preventDefault();
    if (HasError === false && HaspassError === false && HasnameError === false && showErrorMessage === false && HasemailError===false) {
      const log = {
        email: email,
        password: password,
        phone: Phone,
        name: name,
        stamp: date.toLocaleString()
      }
      console.log(Phone)

      const response = await axios.post('http://localhost:4001/signup', log)
      if (response.data.acknowledged === true) {
        window.alert("Registration succesful!")
        handlereset()
        navigation('/login')
      }
      else {
        window.alert("Email already registered!")
        handlereset()
        navigation('/login')
      }
    }
    else {
      window.alert("Enter correct details")
    }
  }
  return (
    <>
      <Navigationbar />
      <div className='flex justify-center items-center mt-24 mb-32'>
        <div className=' bg-black w-auto rounded-lg text-white p-24 py-10'>

          <h1 className='mb-8 text-center'>Signup</h1>
          <Form validated={true} onSubmit={formsubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" className="prevent-validation" placeholder="Enter Your Name" onChange={(e) => { setName(e.target.value); if (e.target.value.length < 2) { setHasNameError(true) } else { setHasNameError(false) } }} value={name} required />
              <Form.Text className="text-muted">
                {(HasnameError === true) ? <p className='text-red-700'>Enter a valid name</p> : <p className="">Looks Cool!</p>}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" min="0" placeholder="Enter Your Phone Number" className='prevent-validation' onChange={(e) => { setPhone(e.target.value); if (e.target.value.length !== 10) { setHasError(true) } else { setHasError(false) } }} value={Phone} required />
              <Form.Text className="text-muted">
                {(HasError === true) ? <p className='text-red-700'>Enter valid mobile number</p> : <p className="">Valid mobile number</p>}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className='prevent-validation' type="email" placeholder="Enter email" onChange={(e)=>CheckEmail(e)} value={email} required />
              <Form.Text className="text-muted">
              {(HasemailError === true) ? <p className='text-red-700'>Enter a valid email</p> : <p className="">Valid Email</p>}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className='flex items-center space-x-4'>
              <Form.Control type={passwordShown ? "text" : "password"} className='prevent-validation' onChange={(e) => { setPassword(e.target.value); if (e.target.value.length < 8) { setHasPassError(true) } else { setHasPassError(false) } }} value={password} placeholder="Password" required />
              <BsEyeFill onClick={()=>Passwordvisibility()} className='text-2xl cursor-pointer'/>
              </div>
              <Form.Text className="text-muted">
                {(HaspassError === true) ? <p className='text-red-700'>Enter a password greater than or equal 8 digits</p> : <p className="">Good Password!</p>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type={passwordShown ? "text" : "password"} className="prevent-validation" onChange={handleConfirmPwd} value={confirmPwd} placeholder="password" required />
              <Form.Text className="text-muted">
                {showErrorMessage && isConfirmPwd ? <p className='text-red-500'> Passwords did not match </p> : <p>Looks Cool!</p>}
              </Form.Text>
            </Form.Group>

            <div className='flex justify-center'>
              <Button className='px-3 py-1 my-8' variant="primary" type="submit">
                SignUp
              </Button>
            </div>


          </Form>
        </div>
      </div>
      <Footermain />
    </>
  );
}

