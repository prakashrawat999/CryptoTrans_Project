import React from 'react'
import Navigationbar from './Navigationbar'
import Footermain from './Footermain'

const About = () => {
  return (
    <>
      <Navigationbar />
      <div className='display-3 my-3'>About</div>
      <h1>
        This page is under development 👎
      </h1>
      <Footermain />
    </>
  )
}

export default About