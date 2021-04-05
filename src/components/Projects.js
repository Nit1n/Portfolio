import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function Projects(){
    const [news , setNews] = useState({}) ; 
    const [tweets , setTweets] = useState({}) ; 
    const [email , setEmail] = useState({}) ; 
    useEffect(()=>{
        axios.all([
            axios.get('https://api.github.com/repos/nit1n/News') , 
            axios.get('https://api.github.com/repos/nit1n/Disasterous-NonDisasterous-Tweets-Recognition-using-NLP') , 
            axios.get('https://api.github.com/repos/nit1n/Email_Spam_classifier-using-Logistic-Regression-model')
        ]).then(axios.spread((resp1 , resp2 , resp3)=>{
            setNews(resp1.data) ; 
            setTweets(resp2.data) ; 
            setEmail(resp3.data) ; 
        })).catch((err)=>{
            console.log('Error in fetching data in project file' , err)  ;
        })
    } , [])
    return(
        <div className= "box">
            <div className ='header'>Projects</div>
            <div className = 'projects'>
                <Card  name = {news['name']} url = {news['html_url']} description={news['description']} languages= {news['language']} date = {news['created_at']}/>
                <Card name = {tweets['name']} url = {tweets['html_url']} description={tweets['description']} languages= {tweets['language']} date = {tweets['created_at']}/>
                <Card name = {email['name']} url = {email['html_url']} description={email['description']} languages= {email['language']} date = {email['created_at']}/>

            </div>
        </div>
    )
}
export default Projects ; 