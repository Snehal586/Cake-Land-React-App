import React from 'react';
import './about.css';
import shivani from '../../assets/shivani.png';
import snehal from '../../assets/snehal.png';
import vaishnavi from '../../assets/vaishnavi.png';
import shreya from '../../assets/shreya.png';


const Aboutus = () => {
    return(
        <div className="container">
              <div class="wrapper">
  <h1>Our Team</h1>
  <div class="team">
    <div class="team_member">
      <div class="team_img">
          
        <img src={snehal} alt="Team_image" />
      </div>
      <h3>SNEHAL</h3>
      <p class="role">UI developer</p>
      <p>I Developed The UI part of These Web Project with Some Styles in SCSS design and React,HTML For Designing Thing I make it in Different Pages Easy and Meaningfull Design..</p>
    </div>
    <div class="team_member">
      <div class="team_img">
        <img src={vaishnavi} alt="Team_image"/>
      </div>
      <h3>VAISHNAVI</h3>
      <p class="role">PAYMENT GATEWAY</p>
      <p>I Used The Strip Payment Gateway for just testing purpose we can do real payments but we need to create an Server for that so In These Project We are just using basic Test Mode For Payment Gateway..</p></div>
    <div class="team_member">
      <div class="team_img">
        <img src={shivani} alt="Team_image"/>
      </div>
      <h3>SHIVANI</h3>
      <p class="role">DATABASE MANAGEMENT</p>
      <p>In These Project I am working on Database Side where I am Doing Some Operations Related To Database Like Addding,Deleting Items also Some Orders Managements Those Kind of Stuff...</p>
    </div>
    <div class="team_member">
      <div class="team_img">
        <img src={shreya} alt="Team_image"/>
      </div>
      <h3>SHREYA</h3>
      <p class="role">BACKEND</p>
      <p>In These Project I am Doing Things Like Connect Our Database to the Web App so that we can send and receive some data from database also some basic conditions to apply for more relibility in App..</p>
    </div>
  </div>
</div>  
        </div>
    )
}


export default Aboutus;