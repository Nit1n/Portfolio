import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function Work(){
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className= "box">
            <div data-aos='fade-up' className='header'>Education and Work Experience</div>
            <div className ='experience'>            
                <div data-aos ='fade-up' class = 'education'>
                    <ul>
                    <li>B.Tech (Electrical Engineering) | National Institute of technology Kurukshetra | (July 2017 - June 2021) </li>
                    <li>Class XII | CBSE | (April 2015 - May 2016)</li>
                    </ul>
                </div>  
                <div data-aos='fade-up'  className= 'skills'>
                    <p>Here are technologies I use:</p>
                    <div className= 'skill-divison'>
                        <div>
                            <ul>
                                <li>JavaScript (ES6+)</li>
                                <li>Node.js</li> 
                                <li>React</li>
                                <li>HTML5/CSS3 </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Scikit Learn</li>
                                <li>Numpy</li>
                                <li>Pandas</li>
                                <li>Matplotlib/Seaborn</li>
                            </ul>
                            </div>
                        <div>
                            <ul>
                                <li> C++</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-aos ='fade-up' className = 'work'>
                    <table>
                        <tbody>
                        <tr>
                            <td><h4> EXPERIENCE: </h4></td>
                            <td><h4>INDIAN RAILWAYS (January-2020 to April-2020)</h4></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> Developed and maintain standardized work procedures for PLC and automated
                            equipment </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
    )
}
export default Work ;