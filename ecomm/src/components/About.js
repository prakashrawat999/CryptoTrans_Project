import React from 'react'
import Navigationbar from './Navigationbar'
import Footermain from './Footermain'
import crypt_tradewebsite from '../assets/crypt_tradewebsite.png'
import '../style/about.css'
import ronak from '../assets/ronak.jpeg'
import muskan from '../assets/muskan.jpeg'
import vineet from '../assets/vineet.jpeg'
import prakash from '../assets/prakash.jpeg'


const About = () => {
  return (
    <>
      <Navigationbar />
    
    <center><h1 className='display-3 my-3'>About Us</h1>
      <h5>
            CrypTrade
          </h5>
          </center>   

    <section class="about">
      <div class = "main">
      <div class="about-text">
        
<img src = {crypt_tradewebsite}>

</img>
</div>  

        
          
          <p>We know that Bitcoin brought blockchain technology to the forefront, which was
taken by the Ethereum to the next level in real world transactions, proving its security
and transparency. So, Using Web3.0 technology, this website is a Blockchain
transaction system having multiple other features with a stunning design. It's
connected to the Ethereum blockchain and paired with metamask (for
connecting crypto currency wallet with the Ethereum blockchain to send crypto
through the blockchain network). </p>

</div>
<br></br>
<br></br>

</section>
<center>
<button class = "homeBtn px-4">
  Contact US
</button>
</center>
<br></br>
<br></br>
<br></br>
<br></br>

<section class="about2">
<div id="about-2">
     <div class="content-box-lg">
         <div class="container">
             <div class="row">
                 <div class="col-md-4">
                    <div class="about-item text-center">
                     <i class="fa fa-book"></i>
                     <h3>MISSION</h3>
                     <br></br>
<br></br>
                     <p> Lorem ipsum dolor sit amet, consealias tenetur doloribus vitae quo eaque, quae illo!fugit tempora ipsum maiores dolorum enim, beatae qui quasialias tenetur doloribus vitae quo eaque, quae illo!fugit tempora ipsum maiores dolorum enim, beatae qui quasictetur adipisicing elit. Ducimus optio  </p>
                     </div>
                 </div>
                 <div class="col-md-4">
                    <div class="about-item text-center">
                     <i class="fa fa-globe"></i>
                     <h3>VISSION</h3>
                     <br></br>
<br></br>
                     <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio sectetur minima soluta nulla, alias tenetur doloribus vitae quo eaque, quae illo!fugit tempora ipsum maiores dolorum enim, beatae qui quasialias tenetur doloribus vitae quo eaque, quae illo!fugit tempora ipsum maiores  </p>
                     </div>
                 </div>
                 <div class="col-md-4">
                    <div class="about-item text-center">
                     <i class="fa fa-pencil"></i>
                     <h3>ACHIEVEMENTS</h3>
                     <br></br>
<br></br>
                     <p> sint Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus optio sectetur minima soluta doloribus vitae quo eaque, quae illo!fugit tempora ipsum maiores dolorum enim, be doloribus vitae quo eaque, quae illo!fugit tempora ipsum maiores dolorum enim, beatae qui quasi </p>
                     </div>
                  </div>
              </div>
            </div>
         </div>
      </div>   
</section>

<br></br>
<br></br><br></br>
<br></br><br></br>
<br></br>

<section class="Team">
  <center>
    <h2>
    <b> Our Team</b> 
    </h2>
    <h6>We all are students of Jagan Institute of Management Studies, <br></br> Currently in final year of Bachelors of Computer Applications.</h6>
  </center>

</section>
<section class="our-team-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={muskan}></img>
                        </div>
                        <div class="team-content">
                            <h3 class="title">Muskan Juneja</h3>
                            <span class="post">Student @JIMS</span>
                        </div>
                        <ul class="social">
                            <li>
                                <a href="#"  target="_blank"class="fa fa-facebook"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-twitter"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-google-plus"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-linkedin"></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={vineet}></img>
                        </div>
                        <div class="team-content">
                            <h3 class="title">Vineet Ajmani</h3>
                            <span class="post">Student @JIMS</span>
                        </div>
                        <ul class="social">
                            <li>
                                <a href="#" class="fa fa-facebook"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-twitter"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-google-plus"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-linkedin"></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={prakash}></img>
                        </div>
                        <div class="team-content">
                            <h3 class="title">Prakash Rawat</h3>
                            <span class="post">Student @JIMS</span>
                        </div>
                        <ul class="social">
                            <li>
                                <a href="#" class="fa fa-facebook"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-twitter"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-google-plus"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-linkedin"></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={ronak}></img>
                        </div>
                        <div class="team-content">
                            <h3 class="title">Ronak Sharma</h3>
                            <span class="post">Student
                            @JIMS</span>
                        </div>
                        <ul class="social">
                            <li>
                                <a href="#" class="fa fa-facebook"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-twitter"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-google-plus"></a>
                            </li>
                            <li>
                                <a href="#" class="fa fa-linkedin"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <br></br>
<br></br>
<br></br>
<br></br>
<section class="extra-about">
    
</section>

      
      <Footermain />
    </>
  )
}
const styles ={

}

export default About