import React, { useEffect } from 'react'
import bitmoji from '../images/bitmoji.png'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
function Intro(){
    useEffect(()=>{
        Aos.init({duration : 2000})
    },[])
    return(
        <div className= "box">
            <div data-aos='fade-down' className ='header'>About Me</div>
            <div className = "intro">
                <img data-aos='fade-left' src= {bitmoji} className = 'bitmoji' alt ='Bitmoji of Navneet Kumar'></img>
                <h3 className ='greeting'>Hi , my name is</h3>
                <h1 className='name'>Navneet Kumar .</h1>
                <p data-aos='fade-right' className='info'>I am from Haryana and currently pursuing B.tech in Electrical Engineering from National Institute of technology Kurukshetra.
                    I am interested in software development , Data analytics and Artificial intelligence . 
                </p>
                
            </div>
        </div>
    )
}
export default Intro ;