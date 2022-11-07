import React, { useRef } from 'react'
import { useState } from 'react';
import Navigationbar from './Navigationbar';
import ReactStars from 'react-stars'
import axios from 'axios';
import Footermain from './Footermain';

export default function Feedback() {
  const [rating, setRating] = useState(0)
  var date = new Date()
  const name = useRef()
  const email = useRef()
  const feedback = useRef()
  const ratingChanged = (newRating) => {
    setRating(newRating)
  }
  const handlereset = () => {
    name.current.value = ''
    email.current.value = ''
    feedback.current.value = ''
    setRating(0);
  }
  const submit = async (e) => {
    e.preventDefault()
    let detail = {
      name: name.current.value,
      email: email.current.value,
      rating: rating,
      feedback: feedback.current.value,
      stamp: date.toLocaleString()
    }
    const response = await axios.post('http://localhost:4001/feedback', detail)
    if (response.data.acknowledged === true) {
      window.alert("Submitted!")
      handlereset()
    }
    else {
      window.alert("Error in submitting form")
      handlereset()
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
        />
        <input
          placeholder="Enter Email"
          style={styles.inputarea}
          ref={email}
        />
        <textarea
          placeholder="Write feedback"
          style={styles.textarea1}
          ref={feedback}
        />
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

