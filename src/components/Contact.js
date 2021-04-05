import React, { useEffect } from 'react'
import resume from '../documents/Navneet.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function Contact(){
    useEffect(()=>{
        Aos.init({duration:2000}) ; 
    },[])
    return(
        <div className= "box">
            <div className='contact'> 
                <a data-aos='fade-up' href={resume} target='_blank' rel="noreferrer" className='resume'>Resume</a>
                <h1 data-aos='fade-up' className='contact-header'>Get in Touch</h1>
                <p data-aos='fade-up' className='contact-body'>I'm currently looking for any new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, 
                    I'll try my best to get back to you!</p>
                <div data-aos='fade-up' className='email'><a  href='mailto:thanit3111@gmail.com'>Say Hello</a></div>
            </div>

        </div>
    )
}
export default Contact ;