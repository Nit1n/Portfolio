import React , {useEffect, useState} from 'react'
import axios from 'axios' ; 
import Card from './Card';

const ignore =['News-Website' , 'Disasterous-NonDisasterous-Tweets-Recognition-using-NLP' , 'Email-Spam-classifier-using-Logistic-Regression-model']
function OtherProjects(){
    const [projects , setProjects] = useState([]) ;
    useEffect(()=>{
        axios.get('https://api.github.com/users/Nit1n/repos').then(resp=>{
            console.log(resp.data) ;
            setProjects(resp.data) ;
        }).catch(err=>{
            console.log('error in fetching data in Other Porjects' , err) ; 
        })
    } ,[])
    return(
        <div className= "box">
            <div className = 'projects'>
                {
                    projects.map(project=>{
                        if(!project['fork'] && ignore.indexOf(project['name']) === -1) return <Card key={project['id']} name = {project['name']} url = {project['html_url']} description={project['description']} languages= {project['language']} date = {project['created_at']}/>
                        else return null;
                    })
                }
            </div>
        </div>
    )
}

export default OtherProjects ;