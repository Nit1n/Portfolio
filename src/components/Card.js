import React from 'react' ; 

function Card({name , url ,description , languages , date}){
    console.log(languages) ;
    return(
        <a className = 'card' href ={url} target= '_blank' rel='noreferrer'>
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