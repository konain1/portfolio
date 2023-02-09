import React from 'react'
import "./Container.scss"




<style>
  @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap');
</style>

function Container() {
  return (
    <>
        <div className='container'>
            <div className='container__left-div'>
                <div className='container__textArea'>
                    <p className='container__p1'>Hy! I Am</p>
                    <p className='container__p2'>Kaunain Kasab</p>

                </div>
                <div className='container__paragraph'> 

                <p>welocme to konain7.com
                welocme to konain7.com
                welocme to konain7.com
                 
              
                 </p>
                 <p>welocme to konain7.com
                welocme to konain7.com
               
                 </p>
                </div>
                <div className='container__btn'>
                    <button>Hire me</button>
                </div>
            </div>
            <div className='container__right-div'>
                <div className='container__img-div'>
                    <img src='/portfolioPIC.jpg'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Container
