import React from 'react';
import "./Main.scss";
import './Container'
import './Middlesection'
import Container from './Container';
import Middlesection from './Middlesection';
<style> @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&family=Ubuntu:ital,wght@0,300;0,500;1,400&display=swap'); </style>

function Main() {
  return (
    <>
      <div className="konain">
      <div className='konain__widthDiv'>
    
    <div className='konain__main_cont'>
    <nav> 
    <div className='konain__left-nav'>
    <div className='konain__personal'>personal</div>

    </div>
    <div className='konain__right-nav'>
      <div>Home</div>
      <div>About me </div>
      <div>service</div>
      <div className='konain__contact'>Contact</div>
    </div>
    </nav>

    </div>
      <Container/>
      <Middlesection />
      </div>

      
    </div> 
  
    </>
  )
}

export default Main
