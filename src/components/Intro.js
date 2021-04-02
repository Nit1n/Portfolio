import React from 'react'
import bitmoji from '../images/bitmoji.png'
function Intro(){
    return(
        <div className= "box">
            <div className ='header'>About Me</div>
            <div className = "intro">
                <img src= {bitmoji} className = 'bitmoji' alt ='Bitmoji of Navneet Kumar'></img>
                <h3 className ='greeting'>Hi , my name is</h3>
                <h1 className='name'>Navneet Kumar .</h1>
                <p className='info'>I am from Haryana and currently pursuing B.tech in Electrical Engineering from National Institute of technology Kurukshetra.
                    I am interested in software development , Data analytics and Artificial intelligence . 
                </p>
                
            </div>
        </div>
    )
}
export default Intro ;