import React, { useEffect } from 'react' ; 
import Aos from 'aos';
import 'aos/dist/aos.css'; 


function Card({name , url ,description , languages , date}){
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <a data-aos='fade-up' className = 'card' href ={url} target= '_blank' rel='noreferrer'>
            <div className ='card-header'>
                <p>{name}</p>
            </div>
            <div className = 'card-body'>
                <p>{description}</p>
            </div>
            <div className = 'card-footer'>
                {
                    
                    (languages !== 'null')?<p>{languages}</p> : null  
                }
                <p>Date : {date?date.substr(0,10):''}</p>
            </div>
        </a>
    )

}
export default Card ;