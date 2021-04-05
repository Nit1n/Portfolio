import React ,{useState , useEffect} from 'react'
import {FaBars} from "react-icons/fa";
import resume from '../documents/Navneet.pdf'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import bitmoji from '../images/bitmoji.png'
import * as Scroll from 'react-scroll';
const ScrollLink = Scroll.Link


function Nav(){
    const [toggle , setToggle]  = useState(false) ; 
    const [width , setWidth] = useState(window.innerWidth) ;    
    function windowResize(){
      setWidth(window.innerWidth) ; 
    }
    useEffect(()=>{
      Aos.init({duration : 2000}) ; 
      window.addEventListener('resize' , windowResize);
      return(()=>{
        window.removeEventListener('resize' , windowResize)
      })
    },[]) 
    return (
        <div  className ='nav'>
        <button className ='nav-icon' onClick={()=>setToggle(!toggle)}><FaBars size ='20px' color ='white' /></button>
        <ul data-aos='fade-down' className='nav-links'>
          <li><ScrollLink to='INTRO' spy={true} smooth={true} duration={500} >About</ScrollLink></li>
          <li><ScrollLink to='WORK' spy={true} smooth={true} duration={500} >Education</ScrollLink></li>
          <li><ScrollLink to='PROJECTS' spy={true} smooth={true} duration={500}>Projects</ScrollLink></li>
          <li><ScrollLink to ='CONTACT' spy={true} smooth={true} duration={500}>Contact</ScrollLink></li>
          <li><a href={resume} target='_blank' rel="noreferrer" className='resume'>Resume</a></li>
        </ul>
        <ul className='nav-links-mobile' style={{transform: (toggle && width <= 768)?'translateX(0)':'translateX(-300px)'}}>
            <li><ScrollLink to='INTRO' spy={true} smooth={true} duration={500} onClick={()=>setToggle(!toggle)} >About</ScrollLink></li>
            <li><ScrollLink to='WORK' spy={true} smooth={true} duration={500} onClick={()=>setToggle(!toggle)}>Education</ScrollLink></li>
            <li><ScrollLink to='PROJECTS' spy={true} smooth={true} duration={500} onClick={()=>setToggle(!toggle)}>Projects</ScrollLink></li>
            <li><ScrollLink to ='CONTACT' spy={true} smooth={true} duration={500} onClick={()=>setToggle(!toggle)}>Contact</ScrollLink></li>
            <li><img src= {bitmoji} className='nav-bitmoji' alt ='Bitmoji of Navneet Kumar'></img></li>
        </ul>
               
      </div>
    )
}

export default Nav ;