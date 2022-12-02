import React, { useRef } from 'react'
import { useState } from 'react';
import Navigationbar from './Navigationbar';
import ReactStars from 'react-stars'
import axios from 'axios';
import Footermain from './Footermain';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
export default function Feedback() {
  const navigation= useNavigate()
  const [rating, setRating] = useState(0)
  var [feedback,setFeedback]=useState("")
  var [mesgError, setMesgError] =useState(false)
  var date = new Date()
  const name = useRef()
  const ratingChanged = (newRating) => {
    setRating(newRating)
  }
  const handlereset = () => {
    name.current.value = ''
    setFeedback("")
    setRating(0);
  }
  const submit = async (e) => {
    e.preventDefault()
    if(Cookies.get().Islogin==="true"){
    let detail = {
      name: name.current.value,
      email: Cookies.get().Email,
      rating: rating,
      feedback: feedback,
      stamp: date.toLocaleString()
    }
    if(rating!==0 && mesgError===false){
    const response = await axios.post('http://localhost:4001/feedback', detail)
    if (response.data.acknowledged === true) {
      window.alert("Submitted!")
      handlereset()
      navigation('/')
    }
    else {
      window.alert("Error in submitting form")
      handlereset()
      navigation('/feedback')
    }
  }
  else{
    window.alert("Enter some rating or check entered details")
 }
}
  else{
    window.alert("Login to continue")
    navigation('/login')
  }
  }
  return (
    <>
      <Navigationbar />
      <h2 className='text-center mt-20 text-purple-900'>Feedback Form</h2>
      <form style={styles.container} onSubmit={submit} className="mt-2 mb-16">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={50}
          color2={'#ffd700'} />
        <input
          placeholder="Enter Name"
          style={styles.inputarea}
          ref={name}
          required
        />
        <textarea
          placeholder="Write feedback"
          style={styles.textarea1}
          value={feedback}
          onChange={(e)=>{setFeedback(e.target.value); if(e.target.value.length<20) {setMesgError(true)} else{ setMesgError(false)}}}
          required
        />
        {(mesgError===true)? <p className='text-red-700'>Enter feeback of more than 20 words</p>: " "}
        <button style={styles.button}>Submit</button>
      </form>
      <Footermain />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  inputarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    padding: 10
  },

  textarea1: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10
  },

  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }
}

